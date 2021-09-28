// const Pool = require('pg-pool');
const { Pool } = require('pg');
const config = require('../config/db.config');
// PostgresSQL Connecting:
// https://node-postgres.com/features/connecting
// Connecting to PostgreSQL with Node.js
// https://www.thisdot.co/blog/connecting-to-postgresql-with-node-js
// Postgress Commands:
// https://www.postgresqltutorial.com/psql-commands/

const pool = new Pool(config);

module.exports = new Pool(config);

// module.exports = new pool;

/*
module.exports = (callback) => {
  pool.on('error', (error, client) => {
    // if an error is encountered by a client while it sits idle in the pool
    // the pool itself will emit an error event with both the error and
    // the client which emitted the original error
    // this is a rare occurrence but can happen if there is a network partition
    // between your application and the database, the database restarts, etc.
    // and so you might want to handle it and at least log it out
    console.error('idle client error', error.message, error.stack);
  });

  // to run a query we can acquire a client from the pool,
  // run a query on the client, and then return the client to the pool
  pool.connect((error, client, done) => {
    if (error) {
      return console.error('error fetching client from pool', error);
    }

    return callback(client, done);
  });
};
*/
