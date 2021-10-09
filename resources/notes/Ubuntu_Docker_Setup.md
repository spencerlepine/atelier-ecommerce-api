# EC2 Setup
Here is what I did to deploy each Docker container to an EC2 instance.
This goes through how to install docker.io and port forward from 80 to 3000 if necessary.
Also, included are steps to EMULATE and arm64 linux system on the EC2 with docker, incase the image was built on an M1 mac chip.
Along with that, there are steps to using `docker buildx` to build the image for multiple architectures on your local machine.

# Basic steps:
```sh
sudo su
sudo apt-get update
sudo apt-get install docker.io
docker --version
sudo usermod -a -G docker ${USER} # so you don't have to run docker with "sudo docker ..."
sudo docker pull spencerlepine/node-server
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```

# Restart the ubuntu Docker service
```sh
sudo systemctl daemon-reload
```

# Set up the QEMU Emulator on EC2
```sh
sudo su
sudo apt-get install qemu binfmt-support qemu-user-static # Install the qemu packages
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes # This step will execute the registering scripts
docker run --rm -t arm64v8/ubuntu uname -m # Testing the emulation environment
docker pull spencerlepine/node-server
docker run -p 3000:3000 -d spencerlepine/node-server
docker pull spencerlepine/sdc-nginx
docker run -p 80:80 -d spencerlepine/sdc-nginx
```
# https://github.com/docker/docker.github.io/blob/2d8b420d3c49712ec4a7bcec1464278fa4c41936/docker-for-mac/multi-arch.md

# BUILD A MULTI ARCH IMAGE
```sh
docker buildx ls
docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx inspect --bootstrap

# cd path/to/file/with-Dockerfile
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/demo:latest --push .

# enter the server folder
cd server
&&
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/sdc-nginx --push .
&&
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/node-server --push .

# build with fewer architectures
docker buildx build --platform linux/amd64,linux/arm64 -t spencerlepine/node-server --push .
docker buildx build --platform linux/amd64 -t spencerlepine/node-server --push .
```

## Links:
 - [betterprogramming.pub article](https://betterprogramming.pub/containerize-node-react-postgres-with-docker-on-aws-ca548595f01e)
 - [Digital Ocean article](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
 - [Ubuntu Article](https://askubuntu.com/questions/938700/how-do-i-install-docker-on-ubuntu-16-04-lts)
