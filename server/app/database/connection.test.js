require('dotenv').config();
const { Pool } = require('pg');
const { sequelize } = require('./index');

describe('Database Connection', () => {
  console.log(`Connection String: ${process.env.DATABASE_URL}`);

  it('sequelize should execute a query', (done) => {
    sequelize
      .query('SELECT NOW()')
      .then((res) => {})
      .catch((err) => err)
      .then((middleware) => {
        if (middleware) {
          console.log(`Connection String: ${process.env.DATABASE_URL}`);
        }
        expect(middleware).not.toBeDefined();
        return middleware;
      })
      .then(done);
  });

  // it('a pg Pool should connect', (done) => {
  //   const connectionString = process.env.DATABASE_URL;
  //   expect(connectionString).toBeDefined();

  //   const pool = new Pool({
  //     connectionString: connectionString
  //   });

  //   pool.connect()
  //     .then(client => {
  //       return client.query('SELECT CURRENT_DATE')
  //         .then(res => {
  //           client.release()
  //           expect(res.rows[0]).toBeDefined();
  //         })
  //         .catch(err => {
  //           client.release()
  //           console.log(err.stack) // your callback here
  //         })
  //         .then(done)
  //     })
  //     .catch(e => {
  //       expect(e).not.toBeDefined();
  //     })
  //     .then(done)
  // });
});
