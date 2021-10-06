- Found example on [Stack Overflow](https://stackoverflow.com/questions/35679995/how-to-use-a-postgresql-container-with-existing-data)
- created docker-compse.yml in root directory
- updated docker-compose.yml:

```yml
version: '2'

services:
  postgresContainer:
    image: postgres:9.4
    environment:
      - 'POSTGRES_HOST_AUTH_METHOD=trust'
    expose:
      - 5432
    volumes:
      - data:/var/lib/postgresql/data

volumes:
  data: {}
```

- ran `docker-compose up`
- run `npm run test:db:connection`
- Find [article](https://www.tecmint.com/backup-and-restore-postgresql-database/) to backup postgres
- export the postgres database `pg_dump postgres > backup.sql`
- Upload Postgres backup into docker container:
  `docker exec -i $(docker-compose ps -q postgresContainer ) psql -Upostgres < backup.sql`
- List the tables to verify everything uploaded:
  `docker exec -it $(docker-compose ps -q postgresContainer ) psql -Upostgres -c '\z'`

## Commands

- Create a database: `docker exec -it $(docker-compose ps -q postgresContainer ) psql -Upostgres -c 'CREATE DATABASE test_db;'`
- START the docker container: `docker-compose up`
- STOP the docker container: `docker-compose stop`
- Test the connection works: `npm run test:db:connection`

### Other Notes:

- Find out what containers are running:
  `docker ps`
- Cannot find IP address? Use Postgres socket file: [Stack Overflow](https://stackoverflow.com/a/56036080)
- using `docker start containerId` does not reference the docker-compose.yml in current directory
- tried running: `docker run -e POSTGRES_HOST_AUTH_METHOD=trust postgres:9.6`
- Copying files into docker container: [Stack Overflow](https://stackoverflow.com/questions/22907231/how-to-copy-files-from-host-to-docker-container)
- Run Postgres Fix command: `docker exec -it $(docker-compose ps -q postgres9 ) psql -Upostgres -c 'SELECT setval(\'product_id_seq\', (SELECT MAX(id) FROM "product"));'`
