# project-catwalk-related-service

### Run Docker:

```sh
$ docker run \
      --name postgres \
      -e POSTGRES_PASSWORD=example \
      -p 5432:5432 \
      -d postgres
$ docker exec -ti -u postgres postgres psql
```

<!-- CREATE USER postgres WITH PASSWORD 'example'; -->
