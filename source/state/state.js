export const State = function() {
    this.states = null;
}

State.prototype.enter = function(stateMachine) {}

State.prototype.exit = function(stateMachine) {}

State.prototype.update = function(stateMachine, gameContext) {}

State.prototype.onEventEnter = function(stateMachine, event) {}


