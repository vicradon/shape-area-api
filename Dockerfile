FROM node:12-alpine
WORKDIR /shape-area-api
COPY . .
RUN npm install --production
CMD ["node", "index.js"]