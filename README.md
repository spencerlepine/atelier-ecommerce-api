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
$ cp .env.sample .env
$ npm install
$ npm run test:db:connection # See "Building a Docker Container"
$ npm start
```

## Building a Docker Container

Follow these steps to build and run a docker container.
The compose file will create the Node server, and Postgres database.

1. Export/Backup an existing Postgres database:
   `$ pg_dump postgres > csv_data/backup.sql`

2. Run the following `docker-compose` commands:

```sh
# PostgreSQL Connection String
# postgres://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<DATABASE_HOST>:<DATABASE_PORT>/<POSTGRES_DB>
# postgres://example:1234@db:5432/postgres_db

# Configure the Postgres Database Name + User
$ cp docker-compose.yml.sample docker-compose.yml
# Build the container
$ docker-compose up --build -d

# After updating code, rebuild the container
$ docker-compose down
$ docker-compose up --build -d

# Test the database connection
$ docker exec container_name_server_1 npm run test:db:connection

# Enter the psql CLI
$ docker exec -it container_name_db_1 psql -U example -W postgres_db

#                               #
#  ***** POSTGRES SET UP *****  #
#                               #

# Upload Postgres backup into docker container:
$ cat ./csv_data/backup.sql | docker exec -i container_name_db_1 psql -U example -d postgres_db

# Print the Postgres data INSIDE the docker container:
$ docker exec -it $(docker-compose ps -q db ) psql -U example -d postgres_db -c '\z'
```

## More Tools

- [k6](https://k6.io/)

---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
