import { GameContext } from "./source/gameContext.js";

export const ExampleContext = function() {
    GameContext.call(this, 60);
}

ExampleContext.prototype = Object.create(GameContext.prototype);
ExampleContext.prototype.constructor = ExampleContext;

ExampleContext.prototype.initialize = function() {
    this.uiManager.parseUI("FPS_COUNTER", this);
    this.uiManager.addTextRequest("FPS_COUNTER", "TEXT_FPS", () => {
        const value = Math.floor(this.renderer.fpsCounter.getSmoothFPS());
        const text = `FPS: ${value}`;

        return text;
    });

    this.uiManager.parseUI("EXAMPLE_UI", this);
}