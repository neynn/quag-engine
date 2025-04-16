import { GameContext } from "../source/gameContext.js";

export const ExampleContext = function() {
    GameContext.call(this, 60);
}

ExampleContext.prototype = Object.create(GameContext.prototype);
ExampleContext.prototype.constructor = ExampleContext;

ExampleContext.prototype.init = function(resources) {
    this.uiManager.parseUI("EXAMPLE_UI", this);
}