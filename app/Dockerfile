
FROM node:23-alpine-slim AS base


LABEL maintainer="Ini label"
LABEL description="Aplikasi Contoh Node.js Express dengan Redis"


WORKDIR /app


COPY package*.json ./

RUN npm install --only=production --no-package-lock --no-audit --no-fund


COPY . .


EXPOSE 3000


USER node


CMD [ "node", "server.js" ]

