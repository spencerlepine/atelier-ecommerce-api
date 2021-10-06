# https://betterprogramming.pub/how-to-provision-a-cheap-postgresql-database-in-aws-ec2-9984ff3ddaea


# https://hashinteractive.com/blog/docker-compose-up-with-postgres-quick-tips/
docker run --name pg-docker --rm -p 5400:5432 -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -d postgres
psql -h localhost -p 5400 -U docker postgres
docker run -i --rm postgres cat /usr/share/postgresql/postgresql.conf.sample > postgres.conf
docker-compose up -d
psql -h localhost -p 5400 -U docker postgres
docker-compose run postgresql bash

psql -h localhost -p 5400 -U docker

docker inspect pg-docker

# Run a command in psql
psql -h localhost -p 5400 -U docker -c '\z'
# Copy the SQL backup file
cat backup.sql | psql -h localhost -p 5400 -U docker -d docker


scp -i server/sdc.pem ./postgres/backup.sql ubuntu@ec2xxxxxxxxxus-west-2.compute.amazonaws.com:backup.sql