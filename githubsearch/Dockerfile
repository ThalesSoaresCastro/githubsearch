# build do app 
FROM node:14-alpine

RUN mkdir -p /app

ENV PORT 3000

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]