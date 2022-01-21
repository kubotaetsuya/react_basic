#!/bin/bash
set -es
# remove existing unicorn pid
rm -f /var/www/html/app/react_basic/api/tmp/pids/unicorn.pid
# move to api directory
cd /var/www/html/app/react_basic/api
# wait for mysql container started
dockerize -wait tcp://${DOCKER_MYSQL_HOST}:${MYSQL_PORT} -timeout 5m
# execute bundle install
bundle install
# create & migrate databse
bundle exec rails db:create RAILS_ENV=${DOCKER_ENV}
bundle exec ridgepole --file Schemafile -c ${DB_YML_PATH} -E ${DOCKER_ENV} --apply
bundle exec ridgepole --file Schemafile -c ${DB_YML_PATH} -E test --apply
# Then exec the container's main process
bundle exec unicorn_rails -p 3001 -c config/unicorn.rb -E ${DOCKER_ENV}
