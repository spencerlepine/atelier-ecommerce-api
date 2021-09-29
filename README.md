# Project Catwalk Related Service API

[![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml)

### Run the Docker container:

```sh
$ docker run \
      --name postgres \
      -e POSTGRES_PASSWORD=example \
      -p 5432:5432 \
      -d postgres
```

<!-- docker exec -ti -u postgres postgres psql -->
<!-- CREATE USER postgres WITH PASSWORD 'example'; -->

### Connect Postgres Client

```js
// Create a "postgres" connection string
const connectionString = `postgres://${process.env.POSTGRES_USER}:\
${process.env.POSTGRES_PASSWORD}@\
${process.env.DATABASE_HOST}:\
${process.env.DATABASE_PORT}/\
${process.env.POSTGRES_DB}`;
...
// Create a client instance
let client = new pg.Client(connectionString);
module.exports.query = (text, values) => client.query(text, values);
```
