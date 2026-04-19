const { getConnection } = require('../shared/config/database');

async function test() {
  try {
    const conn = await getConnection();

    const result = await conn.execute(`SELECT 'Conectado com sucesso' FROM dual`);

    console.log(result.rows);

    await conn.close();
  } catch (err) {
    console.error('Erro ao conectar:', err);
  }
}

test();