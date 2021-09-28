const Pool = require('pg-pool');
const db = require('./connection');

describe('Postgres Connection', () => {
  beforeAll(async () => {
    await db.query('BEGIN');
  });

  afterAll(async () => {
    await db.query('ROLLBACK');
  });

  it('should test', async () => {
    const { rows } = await db.query('SELECT 1 AS "result"');
    expect(rows[0].result).toBe(1);
  });
});
