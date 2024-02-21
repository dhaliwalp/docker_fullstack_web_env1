#docker image rm -f mariadb nginx object-3d-editor-backend
docker container stop nginx_web
docker container stop backend-flask
docker container stop mysql-db
docker image rm -f object-3d-editor-web object-3d-editor-backend object-3d-editor-db mysql
 

docker compose up  --remove-orphans