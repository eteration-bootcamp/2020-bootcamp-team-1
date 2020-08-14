FROM adoptopenjdk:11-jdk-hotspot
MAINTAINER kubilaycicek@gmail.com
COPY . /home/app/api
WORKDIR /home/app/api
EXPOSE 8080
ENTRYPOINT ["java","-jar","/home/app/api/build/libs/FoodStuff-0.0.1-SNAPSHOT.jar","--spring.profiles.active=product"]