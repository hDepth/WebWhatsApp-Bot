class UserStateService {
    constructor() {
      this.states = new Map();
    }
  
    getState(phone) {
      return this.states.get(phone) || 'inicio';
    }
  
    setState(phone, step) {
      this.states.set(phone, step);
    }
  
    resetState(phone) {
      this.states.set(phone, 'inicio');
    }
  
    clearState(phone) {
      this.states.delete(phone);
    }
  }
  
  module.exports = UserStateService;