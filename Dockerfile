FROM node:19-alpine
LABEL authors="rodio"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start:dev"]

ENTRYPOINT ["top", "-b"]