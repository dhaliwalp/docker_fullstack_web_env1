#docker image rm -f mariadb nginx object-3d-editor-backend
docker container stop nginx_web
docker container stop backend_flask
docker container stop mysql-db

docker compose down --volumes
docker volume rm object-3d-editor_mysql_data
docker image rm -f object-3d-editor-web object-3d-editor-client object-3d-editor-backend object-3d-editor-db mysql
docker builder prune
 