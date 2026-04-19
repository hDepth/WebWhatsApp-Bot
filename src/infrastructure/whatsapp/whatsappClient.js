const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WhatsAppClient {
  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth({
        dataPath: './sessions'
      })
    });

    this.initialize();
  }

  initialize() {
    this.client.on('qr', (qr) => {
      console.log('Escaneie o QR Code abaixo:');
      qrcode.generate(qr, { small: true });
    });

    this.client.on('ready', () => {
      console.log('WhatsApp conectado!');
    });

    this.client.on('message', (message) => {
      console.log(`Mensagem recebida: ${message.body}`);

      // resposta simples (teste)
      message.reply('Bot ativo 🚀');
    });

    this.client.initialize();
  }
}

module.exports = WhatsAppClient;