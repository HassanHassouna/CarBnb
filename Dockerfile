FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm install pg --save
RUN npm run build:client 
RUN npm run db:migrate

ENV NODE_ENV=production
CMD npm start