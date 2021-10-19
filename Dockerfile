# syntax=docker/dockerfile:1

FROM node:14.0.0

COPY ["package.json", "package-lock.json*", "./"]

WORKDIR /POLKADOT-API-server-Actionhero-B

COPY . .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]
