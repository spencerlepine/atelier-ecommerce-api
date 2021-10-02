- Found example on [Stack Overflow](https://stackoverflow.com/questions/35679995/how-to-use-a-postgresql-container-with-existing-data)
- created docker-compse.yml in root directory
- updated docker-compose.yml:

```yml
version: '2'

services:
  postgres9:
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
- Find [article](https://www.tecmint.com/backup-and-restore-postgresql-database/) to backup postgres
- export the postgres database `pg_dump postgres > backup.sql`
- Upload Postgres backup into docker container:
  `docker exec -i $(docker-compose ps -q postgres9 ) psql -Upostgres < backup.sql`

## Commands

- START the docker container: `docker-compose up`
- STOP the docker container: `docker-compose stop`

### Other Notes:

- tried running: `docker run -e POSTGRES_HOST_AUTH_METHOD=trust postgres:9.6`
- Copying files into docker container: [Stack Overflow](https://stackoverflow.com/questions/22907231/how-to-copy-files-from-host-to-docker-container)
