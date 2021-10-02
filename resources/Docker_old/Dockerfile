FROM docker:stable

# COPY ./config/*.sql /docker-entrypoint-initdb.d/
# ADD ./config/init.sql /docker-entrypoint-initdb.d
# RUN chmod a+r /docker-entrypoint-initdb.d/*

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]


# FROM postgres:latest

# ADD product.csv bin/myFile.py

# OLD DOCKER SETUP:
# https://sherryhsu.medium.com/how-to-import-csv-into-docker-postgresql-database-22d56e2a1117

# FROM postgres:latest as build
# RUN groupadd -r app && useradd -r -g app app
# USER app
# COPY ./config/*.sql /docker-entrypoint-initdb.d/
# ADD ./config/init.sql /docker-entrypoint-initdb.d
# RUN chmod a+r /docker-entrypoint-initdb.d/*
# EXPOSE 5432

# *** Build the container ***
#
# Example:
# $ docker build -t myrepo/mydatabase:mytag .
#
# This Project:
# $ DOCKER_BUILDKIT=0 docker build -t myrepo/mypostgres:2 .

# *** Run the container ***
#
# Example:
# $ docker run --rm --name mydatabase -v $HOME/Sync/animeDB/pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=your_database -p 6666:5432 myrepo/mydatabase:mytag
#
# This Project:
# $ docker run --rm --name postgress -v $HOME/pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=example -e POSTGRES_DB=postgres -p 5432:5432 myrepo/postgres:2