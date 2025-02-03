FROM node:18.12

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3001

CMD ["npm","run","start"]