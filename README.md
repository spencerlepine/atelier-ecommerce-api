# Project Atelier API

[![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml)

This project is my work for the Hack Reactor System Design Capstone Project. The goal was to replace the existing API (for [Project Catwalk](https://github.com/fec-bareminimum/project-catwalk)) with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic.

## Project Overview:

This projects constists of a Nginx load balancer, a Node/Express server, and a PostgreSQL database. All three are built/run in docker containers and deployed to AWS EC2 instances. This API endpoint has been optimized to handle product level traffic, verified by load testing.

## Resources:

- API Documentation: [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)
- Engineering Journal: [PDF](resources/system_design_project_engineering_journal.pdf) &nbsp; [Google Doc](https://docs.google.com/document/d/1pTTeDCzcKNozd9dljexVn-PrXwzoTBS0hby2dOZ95yw)

## 📦 Technologies:

- [Docker](https://www.docker.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Postgres](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)

## Setup:

1. Start a Postgres Database
```sh
# Launch Postgress in the terminal
brew services start postgresql
```
```sh
# OR create a docker container
cd postgres_db
docker-compose up -d --build
```

2. Set up the Node/Express server
```sh
$ cd server
$ npm install
$ cp .env.sample .env
```
```env
# Update the DATABASE_URL variable
EXAMPLE_URL=postgresql://<username>:<password><host>:5432/<database>
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/postgres
```

3. Start the Node/Express server
```sh
# Build or Rebuild the Docker Container
$ docker-compose up --build -d
# Run Nodejs commands in the Docker Container
$ docker exec container_name_server_1 npm run test:db:connection
```
```sh
# OR run manually
$ npm run dev
$ npm run test:db:connection
```

## TARGET PREFORMANCE
**Throughput:** 100 RPS
**Latency:** 2000ms
**Error rate:** <1% rate

## Preformance Results:
- [x]**Throughput:** ~400 RPS (Max 5000RPS)
- [x]**Latency:** ~70ms
- [x]**Error rate:** <1% rate

## More Tools

- [CSV Cleaner](https://github.com/sdc-bareminimum/project-catwalk-related-service/tree/csv-cleaner)
  - Seperate branch on Repo
  - Scripts for cleaning `.csv` files
- [k6](https://k6.io/)
  - Local Load testing
  - Cloud load testing
  - Run tests:
  `$ k6 run resources/k6-tests/k6-script.js`

- [Loader.io](https://loader.io/)
  - Cloud load testing

## Extra Links:
- Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
- Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)


---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
