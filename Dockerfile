FROM node:18-alpine

WORKDIR /jamming-app

COPY package.json .

COPY . .

RUN npm install 

EXPOSE 8085

ENTRYPOINT ["npm", "run", "dev"]
