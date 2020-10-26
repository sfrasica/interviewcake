class Events {
    constructor() {
      this.events = {};
    }
    // Register an event handler
    on(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName].push(callback);
      } else {
        this.events[eventName] = [callback];
      }
    }
}