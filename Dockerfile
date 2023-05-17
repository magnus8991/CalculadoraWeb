#Primera Etapa
FROM node:18.16.0-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.24.0-alpine
COPY --from=build-step /app/dist/CalculadoraWeb /usr/share/nginx/html