FROM node:alpine

WORKDIR /node/server
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD npm start