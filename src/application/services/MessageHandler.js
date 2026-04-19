const FlowEngine = require('./FlowEngine');
const UserStateService = require('./UserStateService');
const OracleUserStateRepository = require('../../infrastructure/repositories/OracleUserStateRepository');
const flow = require('../../flows/defaultFlow.json');

class MessageHandler {
  constructor() {
    this.flowEngine = new FlowEngine(flow);

    const repository = new OracleUserStateRepository();
    this.userState = new UserStateService(repository);
  }

  async handle({ from, body }) {
    const input = body.trim();

    const currentState = await this.userState.getState(from);

    const result = this.flowEngine.process(currentState, input);

    await this.userState.setState(from, result.nextStep);

    return result.message;
  }
}

module.exports = MessageHandler;