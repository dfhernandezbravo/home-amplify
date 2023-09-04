# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh
RUN echo "satage 1"
ARG APPLICATION_NAME
ARG NEW_RELIC_LABELS
RUN echo $APPLICATION_NAME
RUN echo $NEW_RELIC_LABELS
RUN echo $NEXT_PUBLIC_API_KEY_BFF_WEB
RUN echo $NEXT_PUBLIC_HOST_URL
RUN echo $NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

RUN echo "pre"
ARG APPLICATION_NAME
ARG NEW_RELIC_LABELS
RUN echo $APPLICATION_NAME
RUN echo $NEW_RELIC_LABELS
RUN echo $NEXT_PUBLIC_API_KEY_BFF_WEB
RUN echo $NEXT_PUBLIC_HOST_URL
RUN echo $NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL

RUN NODE_ENV='' yarn install && \
yarn build

RUN echo "post"
ARG APPLICATION_NAME
ARG NEW_RELIC_LABELS
RUN echo $APPLICATION_NAME
RUN echo $NEW_RELIC_LABELS
RUN echo $NEXT_PUBLIC_API_KEY_BFF_WEB
RUN echo $NEXT_PUBLIC_HOST_URL
RUN echo $NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
#CMD [ "yarn", "start" , "-p", "8081"]
