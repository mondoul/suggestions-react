#! /bin/bash
SUGGESTION_VERSION='latest';

echo "Updating suggestion container ..."
if [ -z ${1+x} ]; then
	echo "Version not provided, updating to latest";
	export SUGGESTION_VERSION='latest';
else
	echo "Updating to version '$1'"
	export SUGGESTION_VERSION=$1;
fi

cd ~/suggestion
docker kill -f suggestion-web
docker rm -f `docker ps -aq -f name=suggestion-web`
docker-compose up --build web -d
echo 'Application is now up to date and running'