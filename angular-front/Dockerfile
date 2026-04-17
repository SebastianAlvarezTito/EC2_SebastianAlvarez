# Etapa 1: Construcción (Build)
FROM node:22-alpine AS build
WORKDIR /app

# Copiar archivos de configuración primero para aprovechar la caché de Docker
COPY package*.json ./
RUN npm install

# Copiar el resto del código y compilar
COPY . .
RUN npm run build --configuration=production

# Etapa 2: Servidor Web (Nginx)
FROM nginx:alpine
# Esta ruta debe coincidir con la carpeta que genera 'ng build'
COPY --from=build /app/dist/angular-front/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]