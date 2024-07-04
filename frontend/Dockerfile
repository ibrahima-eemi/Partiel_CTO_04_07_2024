# Utiliser une image Node.js officielle pour construire l'application
FROM node:14 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Utiliser une image nginx officielle pour servir l'application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
