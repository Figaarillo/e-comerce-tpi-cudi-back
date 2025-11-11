FROM node:22-alpine

# Creamos y establecemos el directorio de trabajo
WORKDIR /usr/src/app

# Nso copiamos los archivos .json para poder instalar las dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos
COPY . /usr/src/app

# Exponemos el puerto 3000
EXPOSE 3000

# Iniciamos el servidor
CMD [ "node", "src/index.js" ]
