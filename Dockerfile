FROM node:20.9.0-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install
RUN yarn build

COPY . .

EXPOSE 3000

CMD [ "yarn", "serve" ]
