#!/bin/bash

WORKSPACE='~/suggestion'
TAG=''
echo "Preparing AWS deployment"

if [ -z ${1+x} ]; then
    echo "Version not specified, building latest";
else
    echo "Build version '$1'"
    TAG=":$1"
fi

echo "Packaging Front-end application..."
cd ../frontend-codebase
gulp aws-deploy
cd ../backend-codebase
echo "Building image..."
docker build -t usvaltech/suggestion$TAG .
echo "Pushing new image to DockerHub"
docker push usvaltech/suggestion
echo "Ready for Deployment - Calling update script on AWS"
ssh -i "../sjones.pem" ec2-user@52.91.76.19 $WORKSPACE/update.sh $1
echo "Application was deployed on AWS successfully"