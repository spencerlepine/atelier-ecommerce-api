# Project Catwalk Related Service API

[![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml)

## 📦 Technologies:

- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)

## Setup:

```sh
$ cp .env.sample .env
$ npm install
$ npm start
```

1. Run the Docker container:
   Run a `postgres` Docker image

   ```sh
   $ docker run \
         --name postgres \
         -e POSTGRES_PASSWORD=example \
         -p 5432:5432 \
         -d postgres
   ```

2. Enter the Docker Postgres Image:
   Access postgres CLI, and run the `init.sql` commands

   ```sh
   $ docker exec -ti -u postgres postgres psql
   psql (13.4 (Debian 13.4-1.pgdg110+1))
   Type "help" for help.

   postgres=# *PASTE <config/init.sql>*
   ```

3. Make sure Postgress has a user matching .env credentials
   Create a USER matching configuration credentials

   ```sh
   postgres=# CREATE USER postgres WITH PASSWORD 'example';
   OR
   postgres=# ALTER USER postgres WITH PASSWORD 'example';
   ```

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)

## Resources:

- [Ticketing System (Trello Board)](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
