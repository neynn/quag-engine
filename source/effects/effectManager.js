import { IDGenerator } from "../idGenerator.js";
import { Effect } from "./effect.js";

export const EffectManager = function() {
    this.idGenerator = new IDGenerator("@EFFECT");
    this.activeEffects = new Map();
}

EffectManager.prototype.update = function(gameContext) {
    const { renderer, timer } = gameContext;
    const deleteable = [];
    const context = renderer.getContext();
    const deltaTime = timer.getDeltaTime();

    this.activeEffects.forEach(effect => {
        effect.update(context, deltaTime);

        const effectID = effect.getID();
        const isFinished = effect.isFinished();

        if(isFinished) {
            deleteable.push(effectID);
        }
    });

    for(const effectID of deleteable) {
        this.removeEffect(effectID);
    }
}

EffectManager.prototype.addEffect = function(effect) {
    if(!(effect instanceof Effect)) {
        return;
    }
    
    const effectID = this.idGenerator.getID();

    effect.setID(effectID);

    this.activeEffects.set(effectID, effect);
}

EffectManager.prototype.removeEffect = function(effectID) {
    if(this.activeEffects.has(effectID)) {
        this.activeEffects.delete(effectID);
    }
}