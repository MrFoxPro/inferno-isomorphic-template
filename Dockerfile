FROM node:9.11-jessie  
WORKDIR /usr/src/app_name
COPY . .
RUN npm i
EXPOSE 80
CMD npm run dev
