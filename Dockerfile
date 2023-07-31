FROM node:18-buster-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

# ---

FROM node:18-alpine

RUN apk --update add curl ttf-freefont fontconfig && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
