const FlowEngine = require('../application/services/FlowEngine');

const flow = {
  inicio: {
    mensagem: 'Bem-vindo!\n1 - Cliente\n2 - Não cliente',
    opcoes: {
      '1': 'cliente',
      '2': 'nao_cliente'
    }
  },
  cliente: {
    mensagem: 'Escolha o setor:\n1 - Comercial\n2 - Financeiro\n3 - Suporte',
    opcoes: {
      '1': 'comercial',
      '2': 'financeiro',
      '3': 'suporte'
    }
  },
  comercial: {
    mensagem: 'Você escolheu comercial!',
  }
};

const engine = new FlowEngine(flow);

// Simulação
let state = 'inicio';

console.log(engine.process(state, '1')); // cliente
state = 'cliente';

console.log(engine.process(state, '2')); // financeiro