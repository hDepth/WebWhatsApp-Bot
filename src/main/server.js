const express = require('express');
const WhatsAppClient = require('../infrastructure/whatsapp/whatsappClient');

const app = express();

app.use(express.json());

// inicia bot
new WhatsAppClient();

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});