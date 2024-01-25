ARG NODE_VERSION=16-alpine3.12

FROM node:${NODE_VERSION}

LABEL key="mern-invoice" \
    licence="MIT" \
    description="Mern invoice Image"

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
