https://betterprogramming.pub/containerize-node-react-postgres-with-docker-on-aws-ca548595f01e

# Set up the EC2 Instance

`ssh *instance connection url*`
`sudo apt-get update`
`sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`

# Install DOCKER

# https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

# https://askubuntu.com/questions/938700/how-do-i-install-docker-on-ubuntu-16-04-lts

`sudo apt-get install docker.io`
`docker --version`
`sudo su -`
`passwd ubuntu`
`*enter password*`
`sudo usermod -a -G docker ${USER}` # don't have to run docker with "sudo docker ..."
`docker pull spencerlepine/project-atelier:latest`
`docker run -p 3000:3000 spencerlepine/project-atelier`

# Get the ARM64 build running
`sudo apt-get install qemu binfmt-support qemu-user-static # Install the qemu packages`
`docker run --rm --privileged multiarch/qemu-user-static --reset -p yes # This step will execute the registering scripts`
`docker run --rm -t arm64v8/ubuntu uname -m # Testing the emulation environment`

`docker run -p 3000:3000 spencerlepine/project-atelier`

<!-- sudo docker pull spencerlepine/sdc-postgres:latest -->
<!-- sudo docker run -p 5400:5432 spencerlepine/sdc-postgres:latest -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_HOST_AUTH_METHOD=trust -->

<!-- docker inspect pg-docker
docker network ls -->