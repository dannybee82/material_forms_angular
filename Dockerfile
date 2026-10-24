# Fetch node.js version 20 the alpine (small) version.
FROM node:20-alpine As builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli@19.2.27

RUN npm install

COPY . .

RUN ng build --configuration production

#install nginx
FROM nginx:stable-alpine

COPY nginx.conf.prod /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html

EXPOSE 80