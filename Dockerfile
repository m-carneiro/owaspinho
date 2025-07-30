FROM node:14-alpine

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    && python3 -m ensurepip \
    && pip3 install --no-cache --upgrade pip setuptools

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
