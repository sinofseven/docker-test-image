FROM node:6-alpine

WORKDIR /tmp

ADD package.json /tmp/package.json
ADD main.js /tmp/main.js

RUN npm install

CMD ["node", "main.js"]