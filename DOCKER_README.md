# Using the Docker image

Build a Docker container with Postgres and Node docker images.

[ARM64 StackOverflow](https://stackoverflow.com/questions/66350893/why-macosx86-can-run-docker-arm-container-arm64v8-alpine)

## Setup:

```sh
$ cp .env.sample .env
$ cp docker-compose.yml.sample docker-compose.yml
$ npm install
# Build or Rebuild the Docker Container
$ docker-compose up --build -d
# Run Nodejs commands in the Docker Container
$ docker exec container_name_server_1 npm run test:db:connection
```

## Building a Docker Container

Follow these steps to build and run a docker container.
The compose file will create the Node server, and Postgres database.

1. Export/Backup an existing Postgres database:
   `$ pg_dump postgres > csv_data/backup.sql`

2. Run the following `docker-compose` commands:

Docker Build Commands:

```sh
$ cp docker-compose.yml.sample docker-compose.yml
# Build the container
$ docker-compose up --build -d

# After updating code, rebuild the container
$ docker-compose down
$ docker-compose up --build -d
```

Configure the Postgres Database:

```sh
# PostgreSQL Connection String
# DATABASE_URL=postgres://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<DATABASE_HOST>:<DATABASE_PORT>/<POSTGRES_DB>
# DATABASE_URL=postgres://example:1234@db:5432/postgres_db

# Upload Postgres backup into docker container:
$ cat ./csv_data/backup.sql | docker exec -i container_name_db_1 psql -U example -d postgres_db

# Print the Postgres data INSIDE the docker container:
$ docker exec -it $(docker-compose ps -q db ) psql -U example -d postgres_db -c '\z'

# Test the database connection
$ docker exec container_name_server_1 npm run test:db:connection

# Enter the psql CLI
$ docker exec -it container_name_db_1 psql -U example -W postgres_db
```
