const dotenv = require('dotenv');

// Access the enviroment variables
dotenv.config();

// You can Also use a connection string
const connectionString = `postgres://\
${process.env.POSTGRES_USER}:\
${process.env.POSTGRES_PASSWORD}@\
${process.env.DATABASE_HOST || '127.0.0.1'}:\
${process.env.DATABASE_PORT}/\
${process.env.POSTGRES_DB}`;

console.log('postgres connection string:', connectionString);

module.exports = {
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DATABASE_HOST, // '127.0.0.1',
  dialect: 'postgres',
  // max: 10, // Pool max size
  idleTimeoutMillis: 1000, // Close idle clients after 1 second
  connectionString,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
