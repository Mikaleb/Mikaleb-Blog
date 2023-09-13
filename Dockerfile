FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm run install

COPY . .

EXPOSE 3000

CMD [ "bun", "run", "dev" ]