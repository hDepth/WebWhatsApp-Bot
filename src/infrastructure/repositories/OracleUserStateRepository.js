const { getConnection } = require('../../shared/config/database');

class OracleUserStateRepository {
  async getByPhone(phone) {
    const conn = await getConnection();

    const result = await conn.execute(
      `SELECT STEP FROM USER_STATE WHERE PHONE = :phone`,
      [phone]
    );

    await conn.close();

    if (result.rows.length === 0) return null;

    return result.rows[0][0];
  }

  async save(phone, step) {
    const conn = await getConnection();

    await conn.execute(
      `
      MERGE INTO USER_STATE u
      USING (SELECT :phone AS phone, :step AS step FROM dual) src
      ON (u.PHONE = src.phone)
      WHEN MATCHED THEN
        UPDATE SET u.STEP = src.step, u.UPDATED_AT = CURRENT_TIMESTAMP
      WHEN NOT MATCHED THEN
        INSERT (PHONE, STEP) VALUES (src.phone, src.step)
      `,
      [phone, step],
      { autoCommit: true }
    );

    await conn.close();
  }
}

module.exports = OracleUserStateRepository;