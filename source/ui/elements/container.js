import { Outline } from "../../graphics/applyable/outline.js";
import { isRectangleRectangleIntersect } from "../../math/math.js";
import { UIElement } from "../uiElement.js";

export const Container = function(DEBUG_NAME) {
    UIElement.call(this, DEBUG_NAME);

    this.outline = new Outline();
    this.outline.color.setColor(255, 255, 255, 1);
    this.outline.enable();
} 

Container.prototype = Object.create(UIElement.prototype);
Container.prototype.constructor = Container;

Container.prototype.onCollision = function(type, mouseX, mouseY, mouseRange) {} 

Container.prototype.isColliding = function(mouseX, mouseY, mouseRange) {
    const isIntersection = isRectangleRectangleIntersect(this.positionX, this.positionY, this.width, this.height, mouseX, mouseY, mouseRange, mouseRange);
    
    return isIntersection;
}

Container.prototype.onDebug = function(context, localX, localY) {
    context.globalAlpha = 0.2;
    context.fillStyle = "#0000ff";
    context.fillRect(localX, localY, this.width, this.height);
}

Container.prototype.onDraw = function(context, localX, localY) {
    if(this.outline.isActive()) {
        this.outline.apply(context);
    
        context.strokeRect(localX, localY, this.width, this.height);
    }
}

