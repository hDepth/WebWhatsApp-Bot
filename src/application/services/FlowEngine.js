class FlowEngine {
    constructor(flow) {
      this.flow = flow;
    }
  
    process(currentStep, input) {
      const step = this.flow[currentStep];
  
      if (!step) {
        return {
          nextStep: 'inicio',
          message: `Erro: etapa "${nextStep}" não existe no fluxo.`,
          error: true
        };
      }
  
      // Se não tem opções, é etapa final
      if (!step.opcoes) {
        return {
          nextStep: currentStep,
          message: step.mensagem,
          end: true
        };
      }
  
      const nextStep = step.opcoes[input];
  
      if (!nextStep) {
        return {
          nextStep: currentStep,
          message: 'Opção inválida. Tente novamente:\n\n' + step.mensagem,
          error: true
        };
      }
  
      const next = this.flow[nextStep];
  
      if (!next) {
        return {
          nextStep: 'inicio',
          message: `Erro: etapa "${nextStep}" não existe no fluxo.`,
          error: true
        };
      }
  
      return {
        nextStep,
        message: next.mensagem,
        end: !next.opcoes
      };
    }
  
    getFallback() {
      return {
        nextStep: 'inicio',
        message: 'Erro no fluxo. Voltando ao início.',
        error: true
      };
    }
  }
  
  module.exports = FlowEngine;