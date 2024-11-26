import { Applyable } from "../../graphics/applyable.js";
import { Outline } from "../../graphics/applyable/outline.js";
import { UIElement } from "../uiElement.js";

export const Button = function(id, DEBUG_NAME) {
    UIElement.call(this, id, DEBUG_NAME);
    this.highlight = new Applyable();
    this.outline = new Outline();

    this.highlight.setColor(200, 200, 200, 0.25);
    this.outline.setColor(255, 255, 255, 1);

    this.events.subscribe(UIElement.EVENT_FIRST_COLLISION, DEBUG_NAME, () => this.highlight.enable());
    this.events.subscribe(UIElement.EVENT_FINAL_COLLISION, DEBUG_NAME, () => this.highlight.disable());

    this.outline.enable();
}

Button.prototype = Object.create(UIElement.prototype);
Button.prototype.constructor = Button;