# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16
ARG NEW_RELIC_APP_NAME_TEST
ARG NEW_RELIC_LICENSE_KEY
ARG NEXT_PUBLIC_HOST_URL

WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ENV NEW_RELIC_APP_NAME_TEST=$NEW_RELIC_APP_NAME_TEST
ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY
ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL

RUN echo "TEST VARIABLES NEW_RELIC_APP_NAME_TEST -- $NEW_RELIC_APP_NAME_TEST"
RUN echo $NEW_RELIC_APP_NAME_TEST
RUN echo "TEST VARIABLES NEW_RELIC_LICENSE_KEY -- $NEW_RELIC_LICENSE_KEY"
RUN echo $NEW_RELIC_LICENSE_KEY
RUN echo "TEST VARIABLES NEXT_PUBLIC_HOST_URL -- $NEXT_PUBLIC_HOST_URL"

RUN NODE_ENV='' yarn install && \
yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
#CMD [ "yarn", "start" , "-p", "8081"]

