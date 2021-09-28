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

// import { config } from "dotenv"
// config({ path: "./../.env" })

// module.exports = {
//   development: {
//     database: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     logging: false,
//   },
//   test: {
//     database: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_TEST_HOST,
//     dialect: "postgres",
//     logging: false,
//   },
//   production: {},
// }
