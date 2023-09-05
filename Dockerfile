FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
#RUN /tmp/get-new-relic-js.sh
RUN echo "satage 1"
ARG NEW_RELIC_APP_NAME
ARG NEW_RELIC_LICENSE_KEY
ARG NEXT_PUBLIC_HOST_URL

#ENV NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME
#ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY
#ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL

RUN echo $NEW_RELIC_APP_NAME
RUN echo $NEW_RELIC_LICENSE_KEY
RUN echo $NEXT_PUBLIC_HOST_URL

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

RUN echo "pre"
ARG NEW_RELIC_APP_NAME
ARG NEW_RELIC_LICENSE_KEY
ARG NEXT_PUBLIC_HOST_URL

#ENV NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME
#ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY
#ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL

RUN echo $NEW_RELIC_APP_NAME
RUN echo $NEW_RELIC_LICENSE_KEY
RUN echo $NEXT_PUBLIC_HOST_URL

#RUN NODE_ENV='' yarn install && \
#yarn build

#RUN echo "post"
#RUN echo NEW_RELIC_APP_NAME
#RUN echo NEW_RELIC_LICENSE_KEY
#RUN echo NEXT_PUBLIC_HOST_URL

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
#EXPOSE 8081
#CMD [ "yarn", "start" , "-p", "8081"]
