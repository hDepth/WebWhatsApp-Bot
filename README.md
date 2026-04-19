# 🚀 WhatsApp Automation Bot

Sistema de automação de atendimento via WhatsApp, desenvolvido com foco em arquitetura, organização de código e persistência de estado.

> ⚠️ Projeto em desenvolvimento — não destinado para uso em produção neste momento.

---

## 🧠 Sobre o Projeto

Este projeto tem como objetivo construir um sistema de atendimento automatizado capaz de:

- Interagir com usuários via WhatsApp
- Conduzir fluxos de atendimento dinâmicos
- Persistir o estado da conversa de cada usuário
- Retomar interações do ponto exato onde foram interrompidas

O foco principal está na construção de uma base sólida, escalável e bem estruturada.

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- Oracle Database
- whatsapp-web.js

---

## 🏗️ Arquitetura

O sistema foi estruturado seguindo princípios de separação de responsabilidades, inspirado em Clean Architecture:


src/  
  ├── application/  
  ├── domain/  
  ├── infrastructure/  
  ├── interface/  
  ├── flows/  
  ├── shared/  
  └── main/  


Essa organização permite:

- Facilidade de manutenção
- Evolução do sistema sem acoplamento excessivo
- Testabilidade e escalabilidade

---

## 🔄 Funcionamento Geral

O fluxo da aplicação segue a seguinte lógica:


Usuário → WhatsApp → Bot → Processamento de fluxo → Banco de dados → Resposta


Cada interação do usuário é tratada com base no seu estado atual, garantindo continuidade no atendimento.

---

## 🧩 Fluxo de Atendimento

Os fluxos são definidos de forma configurável (JSON), permitindo flexibilidade e fácil adaptação para diferentes cenários de atendimento.

---

## 🗄️ Persistência

O sistema utiliza banco de dados para armazenar o estado de cada usuário, permitindo:

- Atendimento contínuo
- Suporte a múltiplos usuários simultaneamente
- Recuperação de contexto após reinicialização do sistema

---

## 🎯 Objetivo do Projeto

Este projeto está sendo desenvolvido com foco em:

- Aprimoramento técnico
- Prática de arquitetura de software
- Integração entre sistemas
- Construção de portfólio

---

## 🔮 Próximos Passos

- Evolução da experiência do usuário (UX)
- Criação de painel administrativo
- Suporte a múltiplos fluxos de atendimento
- Expansão da arquitetura para novos cenários

---

## ⚠️ Observação

Este projeto utiliza automação baseada em WhatsApp Web para fins de estudo e prototipação.

---

## 👨‍💻 Autor

Desenvolvido por Pedro Henrique
