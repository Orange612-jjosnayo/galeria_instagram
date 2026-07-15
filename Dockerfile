# Etapa 1: Compilar la aplicación de React
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalación limpia de dependencias
RUN npm ci

# Copiamos todo el código fuente
COPY . .

# Compilamos el proyecto (Vite generará la carpeta /app/dist)
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiamos los archivos estáticos compilados al directorio por defecto de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 dentro del contenedor
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
