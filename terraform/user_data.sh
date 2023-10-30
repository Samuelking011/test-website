#!/bin/bash

sudo apt update -y
sudo apt update -y
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker ubuntu
sudo yum install npm -y

sudo docker pull samuelking01/website:latest
sudo docker run -d -p 80:80 samuelking01/website:latest