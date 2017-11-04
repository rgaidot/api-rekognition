FROM node:8-alpine

ENV NODE_ENV production

ADD /config/production.json /app/config/custom-environment-variables.json

RUN apk --update add alpine-sdk

ADD . /app

WORKDIR /app

EXPOSE 3000

RUN make install-npm

CMD ["npm", "start"]
