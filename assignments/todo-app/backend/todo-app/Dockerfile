FROM maven:3.6.0-jdk-8-alpine

COPY . /home/app/api
WORKDIR /home/app/api

RUN ["mvn", "install", "-Dmaven.test.skip=true"]

MAINTAINER kubilaycicek0693@gmail.com

EXPOSE 8095:8095

ENTRYPOINT ["java","-jar","/home/app/api/target/todoApp-0.0.1-SNAPSHOT.jar","--spring.profiles.active=docker"]