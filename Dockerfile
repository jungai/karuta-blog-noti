FROM node:16-alpine3.11

WORKDIR /app

RUN npm install -g pnpm

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm i --frozen-lockfile

COPY . .

CMD ["pnpm", "start"]