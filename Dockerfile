FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json ./
RUN yarn
RUN yarn migrations

COPY . ./

EXPOSE 5001

CMD yarn dev