const db = require('./connection');

describe('Postgres connection', () => {
  beforeAll((done) => {
    db.query('BEGIN').then(done);
  });

  afterAll((done) => {
    db.query('ROLLBACK').then(done);
  });

  it('should run', () => {
    db.query('SELECT NOW()') // your query string here
      .then((result) => {
        expect(err).toBe(undefined);
        expect(res).not.toBe(undefined);
      })
      .then(done)
      .catch((e) => console.error(e.stack));
  });
});
