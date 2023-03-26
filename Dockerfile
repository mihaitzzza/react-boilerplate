# pull official base image
FROM node:18.13.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./app/package.json ./
COPY ./app/package-lock.json ./

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install

COPY ./app/ ./

RUN npm run build

CMD ["node", "server"]
