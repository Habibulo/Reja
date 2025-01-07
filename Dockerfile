FROM node:20.10.0

COPY . /Reja
WORKDIR /Reja
CMD npm install && node server.js

# DOCKERFILE => DOCKER IMAGE => direct docker: Container
# DOCKERFILE => DOCKER IMAGE => docker-composer: Container