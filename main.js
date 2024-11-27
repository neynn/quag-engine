import { ImageSheet } from "./source/graphics/imageSheet.js";
import { GlobalResourceManager } from "./source/resourceManager.js";
import { ExampleContext } from "./exampleContext.js";

const gameContext = new ExampleContext();

GlobalResourceManager.setServerAddress("EXAMPLE_ADDRESS");

GlobalResourceManager.loadMain("assets", "files.json").then(async files => {
    const sprites = {};
    const tiles = {};

    await GlobalResourceManager.loadImages(files.sprites, ((key, image, config) => {
        const imageSheet = new ImageSheet(image, config);
        imageSheet.defineDefaultAnimation();
        sprites[key] = imageSheet;
    }));

    await GlobalResourceManager.loadImages(files.tiles, ((key, image, config) => {
        const imageSheet = new ImageSheet(image, config);
        imageSheet.defineAnimations();
        imageSheet.defineDefaultAnimation();
        tiles[key] = imageSheet;
    }));

    const fontPromises = [];

    for(const fontID in files.fonts) {
        const fontMeta = files.fonts[fontID];
        const fontPromise = GlobalResourceManager.loadCSSFont(fontMeta);

        fontPromises.push(fontPromise);
    }

    await Promise.allSettled(fontPromises);

    files.sprites = sprites;
    files.tiles = tiles;

    return files;
}).then(resources => {
  gameContext.loadResources(resources);
  gameContext.addUIClickEvent();
  gameContext.initialize();
  gameContext.timer.start();
});