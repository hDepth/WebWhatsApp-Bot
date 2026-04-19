const oracledb = require('oracledb');

const dbConfig = {
  user: 'BOT_USER',
  password: 'bot123',
  connectString: 'localhost/XEPDB1'
};

async function getConnection() {
  return await oracledb.getConnection(dbConfig);
}

module.exports = {
  getConnection
};