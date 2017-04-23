
build image from dockerfile
---------------------------
docker build -t <your username>/node-web-app .

list images
-----------
docker images

start an image
--------------
docker run -p 49160:8080 -d <your username>/node-web-app

Get container ID
----------------
$ docker ps

Print app output
----------------
$ docker logs <container id>

cmd prompt inside image
-----------------------
docker exec -it <container id> /bin/bash

deploy stack
------------
docker stack deploy --compose-file docker-stack.yml cemaritan
