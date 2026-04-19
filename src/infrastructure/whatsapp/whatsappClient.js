const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WhatsAppClient {
  constructor(messageHandler) {
    this.messageHandler = messageHandler;

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

    this.client.on('message', async (message) => {
      try {
        console.log(`Mensagem recebida: ${message.body}`);

        // filtros
        if (!message.body) return;
        if (message.from.includes('@g.us')) return;
        if (message.from === 'status@broadcast') return;
        if (message.fromMe) return;

        const response = await this.messageHandler({
          from: message.from,
          body: message.body
        });

        if (response) {
          await this.client.sendMessage(message.from, response);
        }

      } catch (err) {
        console.error('Erro ao processar mensagem:', err);
      }
    });

    this.client.initialize();
  }
}

module.exports = WhatsAppClient;