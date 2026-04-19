class UserStateService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async getState(phone) {
      const state = await this.repository.getByPhone(phone);
      return state || 'inicio';
    }
  
    async setState(phone, step) {
      await this.repository.save(phone, step);
    }
  }
  
  module.exports = UserStateService;