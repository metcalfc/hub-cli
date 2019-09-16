FROM node:10-alpine

WORKDIR /app
COPY . /app
RUN npm install
RUN npm -g install
ENTRYPOINT ["/app/bin/hub-cli"]
