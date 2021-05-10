#!/bin/sh

SERVICE=uppaal-web
COMPOSE_SERVICE=web
SERVER=uppaal.mywire.org
SSH_USER=ec2-user

ssh $SSH_USER@$SERVER "
    cd $SERVICE
    git pull
    cd ..
    docker-compose up --build --force-recreate --no-deps -d $COMPOSE_SERVICE
"
