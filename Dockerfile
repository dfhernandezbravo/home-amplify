# hadolint ignore=DL3007
FROM ghcr.io/cencosud-cencommerce/dpt-images-utils-new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM ghcr.io/cencosud-cencommerce/dpt-images/utils/docker-images/node:18.18-alpine3.18

WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ARG NEXT_PUBLIC_HOST_URL
ARG NEXT_PUBLIC_CMS_URL
ARG NEXT_PUBLIC_CMS_API_KEY
ARG NEXT_PUBLIC_BFF_WEB_URL
ARG NEXT_PUBLIC_API_KEY_BFF_WEB
ARG NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL
ARG NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY
ARG NPM_TOKEN
ARG GHT_EDS_TOKEN


ENV NPM_TOKEN=$NPM_TOKEN
ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
ENV NEXT_PUBLIC_CMS_URL=$NEXT_PUBLIC_CMS_URL
ENV NEXT_PUBLIC_CMS_API_KEY=$NEXT_PUBLIC_CMS_API_KEY
ENV NEXT_PUBLIC_BFF_WEB_URL=$NEXT_PUBLIC_BFF_WEB_URL
ENV NEXT_PUBLIC_API_KEY_BFF_WEB=$NEXT_PUBLIC_API_KEY_BFF_WEB
ENV NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL=$NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL
ENV NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY=$NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY
ENV GHT_EDS_TOKEN=$GHT_EDS_TOKEN


RUN echo "NEXT_PUBLIC_HOST_URL -- $NEXT_PUBLIC_HOST_URL"
RUN echo "NEXT_PUBLIC_CMS_URL -- $NEXT_PUBLIC_CMS_URL"
RUN echo "NEXT_PUBLIC_CMS_API_KEY -- $NEXT_PUBLIC_CMS_API_KEY"
RUN echo "NEXT_PUBLIC_BFF_WEB_URL -- $NEXT_PUBLIC_BFF_WEB_URL"
RUN echo "NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL -- $NEXT_PUBLIC_CMS_REMOTE_CONFIG_URL"
RUN echo "NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY -- $NEXT_PUBLIC_VTEX_PERSONALIZE_API_KEY"
RUN echo "GHT_EDS_TOKEN --$GHT_EDS_TOKEN"

RUN npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J
RUN echo "npm config set -- //gitlab.com/api/v4/packages/npm/:_authToken=glpat-8ASRwMRojB3hcxaFgx3J"
RUN npm config set -- //node-registry.bit.cloud/:_authToken=f91ccd4c-0f9a-4ee7-ba17-40404dd9b05a
RUN npm config set -- //npm.pkg.github.com/:_authToken=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

RUN NODE_ENV='' yarn install && \
yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8081
ENTRYPOINT [ "yarn", "start" , "-p", "8081"]s