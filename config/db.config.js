const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DATABASE_PORT,
  // max: 10, // Pool max size
  idleTimeoutMillis: 1000, // Close idle clients after 1 second
};
