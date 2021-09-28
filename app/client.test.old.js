// // const Pool = require('pg-pool');
// const { Pool, Client } = require('pg');
// const config = require('./config/db.config');

// describe('Postgres database', () => {
//   let pool;

//   beforeAll(() => {
//     pool = new Pool(config);
//   });

//   afterAll(async () => {
//     pool.end();
//   });

//   it('should connect with Pool', (done) => {
//     pool.query('SELECT NOW()', (err, res) => {
//       expect(err).toBe(undefined);
//       expect(res).not.toBe(undefined);
//       done();
//     });

//     // ASYNCHRONOUS
//     // pool.query('SELECT NOW()') // your query string here
//     //   .then((result) => {
//     //     expect(err).toBe(undefined);
//     //     expect(res).not.toBe(undefined);
//     //   })
//     //   .then(done)
//     //   .catch((e) => console.error(e.stack));
//   });
// });

// /*
//  * USING A CONNECTION STRING
//  *
//  * const dotenv = require('dotenv');
//  * dotenv.config();

//  * const connectionString = `postgres://${process.env.POSTGRES_USER}:\
//  * ${process.env.POSTGRES_PASSWORD}@\
//  * ${process.env.DATABASE_HOST}:\
//  * ${process.env.DATABASE_PORT}/\
//  * ${process.env.POSTGRES_DB}`;
//  *
//  * pool = new pg.Pool(connectionString);
//  * console.log(connectionString);
// */
