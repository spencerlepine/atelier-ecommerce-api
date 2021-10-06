# Project Atelier API

[![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml)

This project is my work for the Hack Reactor System Design Capstone Project. The goal was to replace the existing API (for [Project Catwalk](https://github.com/fec-bareminimum/project-catwalk)) with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic.

## Resources:

- Engineering Journal: [Markdown File](resources/JOURNAL.md)
- Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
- Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)
- API Documentation: [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)

## 📦 Technologies:

- [Docker](https://www.docker.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Postgres](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)

## Project Overview:

This project includes an Express app that connects to a PostgreSQL database. The database conneciton is configured with a postgres Docker image.

## Setup:

```sh
$ cd server
$ cp .env.sample .env
$ npm install
# Build or Rebuild the Docker Container
$ docker-compose up --build -d
# Run Nodejs commands in the Docker Container
$ docker exec container_name_server_1 npm run test:db:connection
```

### Alternative Setup

```sh
# Start the Express server
$ npm start
# *START* a local PostgreSQL database (PORT 5432)
# Update the DATABASE URL: postgres://postgres:postgres@127.0.0.1:5432/postgres
$ npm run test:db:connection
```

## More Tools

- Run [k6](https://k6.io/) tests:
  `$ sh resources/k6-tests/load-test.sh`

---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
