const FlowEngine = require('../application/services/FlowEngine');
const UserStateService = require('../application/services/UserStateService');
const flow = require('../flows/defaultFlow.json');

const engine = new FlowEngine(flow);
const userState = new UserStateService();

const phone = '11999999999';

// Usuário manda primeira mensagem
let currentState = userState.getState(phone);
let response = engine.process(currentState, '1');

console.log('Resposta 1:', response);

userState.setState(phone, response.nextStep);

// Próxima interação
currentState = userState.getState(phone);
response = engine.process(currentState, '2');

console.log('Resposta 2:', response);

userState.setState(phone, response.nextStep);