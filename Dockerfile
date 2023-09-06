# build stage
FROM node:18.16.0-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts --force

COPY Dockerfile ./
COPY index.html ./
# COPY postcss.config.js ./
# COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY env.d.ts ./
COPY .env ./
COPY ./src/ ./src/
COPY ./public/ ./public/

RUN npm run build
#COPY keycloak.json ./dist

# production stage
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
