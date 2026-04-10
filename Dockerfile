FROM node:25-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM builder AS development
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]

FROM nginx:alpine AS runner

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

RUN mkdir -p /var/cache/nginx /var/run/nginx \
    && chown -R nginx:nginx /var/cache/nginx /var/run/nginx \
    && chmod -R 755 /var/cache/nginx

USER nginx

EXPOSE 8080

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]