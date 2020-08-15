FROM node:10.11.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:10.11.0-alpine
MAINTAINER tarikk
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/build ./build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]