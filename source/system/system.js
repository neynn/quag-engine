export const System = function(id, reference) {
    this.id = id;
    this.reference = reference;
    this.entities = new Set();
}   

System.prototype.addEntity = function(entityID) {
    if(!this.entities.has(entityID)) {
        this.entities.add(entityID);
    }
}

System.prototype.removeEntity = function(entityID) {
    if(this.entities.has(entityID)) {
        this.entities.delete(entityID);
    }
} 

System.prototype.hasEntity = function(entityID) {
    return this.entities.has(entityID);
}

System.prototype.update = function(gameContext) {
    const { entityManager } = gameContext;
    const invalidIDs = [];

    for(const entityID of this.entities) {
        const entity = entityManager.getEntity(entityID);

        if(!entity) {
            invalidIDs.push(entityID);
            continue;
        }

        this.reference(gameContext, entity);
    }

    for(const entityID of invalidIDs) {
        this.removeEntity(entityID);
    }
}