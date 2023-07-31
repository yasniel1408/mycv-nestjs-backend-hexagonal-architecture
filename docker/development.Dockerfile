FROM node:16.17.0-alpine

WORKDIR /usr/src

COPY ["./package.json", "./package-lock.json", "/usr/src/"]

RUN npm install

COPY ["./", "/usr/src/"]

EXPOSE 3000

RUN chmod a+rx /usr/src/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node

CMD ["npm", "run", "start:dev"]
