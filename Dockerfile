# 1. Usar la imagen base de Node.js (versión LTS recomendada)
FROM node:16-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código fuente de la aplicación
COPY . .

# 6. Compilar el proyecto TypeScript
RUN npm run build

# 7. Definir la variable de entorno para el entorno de producción
ENV NODE_ENV=production

# 8. Exponer el puerto en el que corre la aplicación (puerto 3000)
EXPOSE 3000

# 9. Definir el comando para arrancar la aplicación
CMD ["node", "dist/main.js"]
