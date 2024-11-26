import { Outline } from "../../graphics/applyable/outline.js";
import { isRectangleRectangleIntersect } from "../../math/math.js";
import { UIElement } from "../uiElement.js";

export const Container = function(id) {
    UIElement.call(this, id, "CONTAINER");
    this.outline = new Outline();
    this.outline.setColor(255, 255, 255, 1);
    this.outline.enable();
} 

Container.prototype = Object.create(UIElement.prototype);
Container.prototype.constructor = Container;

Container.prototype.loadFromConfig = function(config) {
    const { id, width, height, opacity, position } = config;
    const { x, y } = position;

    this.DEBUG_NAME = id;
    this.bounds.set(0, 0, width, height);
    this.setPosition(x, y);
    this.setOpacity(opacity);
}

Container.prototype.isColliding = function(mouseX, mouseY, mouseRange) {
    const { w, h } = this.bounds;
    const isIntersection = isRectangleRectangleIntersect(this.position.x, this.position.y, w, h, mouseX, mouseY, mouseRange, mouseRange);
    
    return isIntersection;
}

Container.prototype.onDebug = function(context, viewportX, viewportY,localX, localY) {
    const { w, h } = this.bounds;
    context.globalAlpha = 0.2;
    context.fillStyle = "#0000ff";
    context.fillRect(localX, localY, w, h);
}

Container.prototype.onDraw = function(context, viewportX, viewportY, localX, localY) {
    if(this.outline.getActive()) {
        this.outline.apply(context);
    
        context.strokeRect(localX, localY, this.bounds.w, this.bounds.h);
    }
}

