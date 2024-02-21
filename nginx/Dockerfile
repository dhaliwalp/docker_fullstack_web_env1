# 2. Nginx
FROM ubuntu:latest

RUN apt-get update
RUN apt-get install nginx -y
WORKDIR /var/www/html

# Copy config nginx
RUN rm /etc/nginx/sites-enabled/default
COPY nginx.conf /etc/nginx/sites-enabled/default.conf
COPY index.html /var/www/html


RUN apt-get install curl -y

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]