FROM postgres:latest

ENV POSTGRES_USER=my_user
ENV POSTGRES_PASSWORD=my_password
ENV POSTGRES_DB=my_database

COPY init.sql /docker-entrypoint-initdb.d/
