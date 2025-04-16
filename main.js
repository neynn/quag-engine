import { ResourceManager } from "./source/resourceManager.js";
import { ExampleContext } from "./game/exampleContext.js";

const RESOURCE_PATH = {
  DEV: "assets/assets.json",
  PROD: "assets/assets_prod.json"
};

const gameContext = new ExampleContext();
const resourceManager = new ResourceManager();
const resources = await resourceManager.loadResources(ResourceManager.MODE.DEVELOPER, RESOURCE_PATH.DEV, RESOURCE_PATH.PROD);

gameContext.loadResources(resources);
gameContext.init(resources);
gameContext.timer.start();




