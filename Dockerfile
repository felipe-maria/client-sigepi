# specify the node base image with your desired version node:<version>
FROM node:16.16.0
WORKDIR /var/www
RUN npm install -g @angular/cli@14.0.5

# replace this with your application's default port
EXPOSE 4200
