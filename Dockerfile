FROM node:18-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --silent
COPY src .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]