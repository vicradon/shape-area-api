FROM node:12-alpine
COPY . .
RUN npm install --production
CMD ["node", "index.js"]