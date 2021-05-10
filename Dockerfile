FROM node:14.16.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
ENV PORT=8080
RUN yarn build
RUN npm install -g serve

ENTRYPOINT [ "serve", "-s", "build" ]
