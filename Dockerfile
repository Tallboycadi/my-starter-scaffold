﻿FROM node:20-alpine
WORKDIR /app

COPY package.json ./
RUN npm install --only=production --no-audit --no-fund

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
