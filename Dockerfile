# Imagem base oficial do Node.js
FROM node:16-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

RUN npm ci

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expôr a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
