const express = require('express');
const WhatsAppClient = require('../infrastructure/whatsapp/whatsappClient');
const MessageHandler = require('../application/services/MessageHandler');

const app = express();
app.use(express.json());

const handler = new MessageHandler();

// injeta o cérebro no bot
new WhatsAppClient((message) => handler.handle(message));

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});