sudo su
sudo apt-get update
sudo apt-get install docker.io
sudo docker pull spencerlepine/node-server
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

# Restart the ubuntu Docker service
sudo systemctl daemon-reload

sudo su
sudo apt-get install qemu binfmt-support qemu-user-static # Install the qemu packages
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes # This step will execute the registering scripts
docker run --rm -t arm64v8/ubuntu uname -m # Testing the emulation environment
docker pull spencerlepine/node-server
docker run -p 3000:3000 -d spencerlepine/node-server
docker pull spencerlepine/sdc-nginx
docker run -p 80:80 -d spencerlepine/sdc-nginx



# https://github.com/docker/docker.github.io/blob/2d8b420d3c49712ec4a7bcec1464278fa4c41936/docker-for-mac/multi-arch.md
# BUILD A MULTI ARCH IMAGE
docker buildx ls
docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx inspect --bootstrap
# cd path/to/file/with-Dockerfile
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/demo:latest --push .

cd server/app &&
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/sdc-nginx --push .
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/node-server --push .

docker buildx build --platform linux/amd64,linux/arm64 -t spencerlepine/node-server --push .
cd server/app && docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/sdc-nginx --push .
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t spencerlepine/node-server --push .


docker buildx build --platform linux/amd64 -t spencerlepine/node-server --push .