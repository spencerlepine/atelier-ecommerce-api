# Project Atelier API

[![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml)

This project is my work for the Hack Reactor System Design Capstone Project. The goal was to replace the existing API (for [Project Catwalk](https://github.com/fec-bareminimum/project-catwalk)) with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic.

## Resources:

- [ ] Engineering Journal: [Markdown File](resources/JOURNAL.md)
- [ ] Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
- [ ] Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)
- [ ] API Documentation: [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)

## 📦 Technologies:

- [Axios](https://www.npmjs.com/package/axios)
- [Postgres](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

## Project Overview:

This project includes an Express app that connects to a PostgreSQL database. The database conneciton is configured with a postgres Docker image.

> the test enviroment uses the 'test_db' database

## Setup:

```sh
$ cp .env.sample .env
$ npm install
$ docker-compose up # see "Docker Container"
$ npm run test:db:connection
$ npm start
```

## Docker Container

- Execute: `$ docker-compose up`
- Execute: `$ npm run test:db:connection`
- Export the postgres database: ` $pg_dump postgres > csv_data/backup.sql`
- Upload Postgres backup into docker container:
  `$ docker exec -i $(docker-compose ps -q postgresContainer ) psql -Upostgres < csv_data/backup.sql`
- List the tables to verify everything uploaded:
  `$ docker exec -it $(docker-compose ps -q postgresContainer ) psql -Upostgres -c '\z'`

## Loading CSV Data

- Refer to [CSV Instructions](csv_data/README.md)

## More Tools

- [k6](https://k6.io/)

---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
