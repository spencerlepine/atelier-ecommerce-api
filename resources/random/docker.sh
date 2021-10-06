cd server
docker build . -t project-atelier
# docker tag project-atelier spencerlepine/project-atelier
docker push spencerlepine/project-atelier
# docker tag project-atelier
# on EC2
docker run -p 3000:3000 spencerlepine/project-atelier
docker commit f4215572e452 spencerlepine/project-atelier
docker push spencerlepine/project-atelier

# PostgreSQL Connection String
# postgres://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<DATABASE_HOST>:<DATABASE_PORT>/<POSTGRES_DB>
# postgres://docker:123456@db:5432/docker

docker run -p 3000:3000 spencerlepine/sdc-build

# Configure the Postgres Database Name + User
cp docker-compose.yml.sample docker-compose.yml
# Build the container
docker-compose up --build -d

# Start the container
docker-compose up -d

# After updating code, rebuild the container
docker-compose down
docker-compose up --build -d

# Test the database connection
docker exec project-catwalk-related-service_server_1 npm run test:db:connection

# Enter the psql CLI
docker exec -it project-catwalk-related-service_db_1 psql -U docker -W docker
# 123456

# Other: docker system prune
docker system prune

# - Upload Postgres backup into docker container:
# docker exec -it $(docker-compose ps -q db ) psql -U docker -d docker < csv_data/backup.sql

# Print the Postgres data INSIDE the docker container:
docker exec -it $(docker-compose ps -q postgres ) psql -U docker -d docker -c '\z'

# Copy the SQL backup file
cat ./sql/backup.sql | docker exec -i $(docker-compose ps -q postgres ) psql -U docker -d docker

# Other Commands:
docker ps # list the containers
docker stop <CONTAINER ID> -t 0 # Stop the container
docker rm <CONTAINER ID> # delete the container
docker images # list the images
docker rmi <IMAGE ID> # remove the image

$ docker build . -t ec2-app
$ docker run -p 3000:3000 ec2-app
$ docker login # Use your Docker Hub credentials here

# Tag the image to PUSH
$ docker tag ec2-app <YOUR_DOCKER_USERNAME>/ec2-app
$ docker push <YOUR_DOCKER_USERNAME>/ec2-app

# connect to AWS shh
$ docker run -p 3000:3000 <YOUR_DOCKER_USERNAME>/ec2-app

# You'll be able to reach the instance using the same address you used to SSH into the instance. Simply navigate in your browser to:
<PUBLIC_DNS>:3000/status