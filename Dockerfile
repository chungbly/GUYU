# Build BASE
FROM node:21.6-alpine3.18 as BASE

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:21.6-alpine3.18 AS BUILD

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN yarn build \
    && cd .next/standalone 

# Build production
FROM node:21.6-alpine3.18 AS PRODUCTION

WORKDIR /app

COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.mjs ./

# Set mode "standalone" in file "next.config.js"
COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 80

CMD ["node", "server.js"]
