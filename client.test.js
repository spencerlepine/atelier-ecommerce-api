const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = `postgres://${process.env.POSTGRES_USER}:\
${process.env.POSTGRES_PASSWORD}@\
${process.env.DATABASE_HOST}:\
${process.env.DATABASE_PORT}/\
${process.env.POSTGRES_DB}`;

console.log(connectionString);

describe('postgres test', () => {
  let client;

  beforeAll(() => {
    client = new pg.Client(connectionString);
  });

  afterAll(() => {
    client.end();
  });

  it('test connection', (done) => {
    client.connect((err) => {
      if (err) {
        console.error(`error connecting: ${err.stack}`);
        throw new Error(err);
      }
      console.log(`connected as id ${client.threadId}`);
      done();
    });
  });
});
