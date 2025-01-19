import { GameContext } from "../source/gameContext.js";

export const ExampleContext = function() {
    GameContext.call(this, 60);
}

ExampleContext.prototype = Object.create(GameContext.prototype);
ExampleContext.prototype.constructor = ExampleContext;

ExampleContext.prototype.initialize = function(resources) {
    this.uiManager.parseUI("FPS_COUNTER", this);
    this.uiManager.addDynamicText("FPS_COUNTER", "TEXT_FPS", (element) => {
        const fps = Math.floor(this.renderer.fpsCounter.getSmoothFPS());
        const text = `FPS: ${fps}`;

        element.setText(text);
    });

    this.uiManager.parseUI("EXAMPLE_UI", this);
}