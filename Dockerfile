FROM node:latest
WORKDIR /app
ENV PORT=8080
COPY . .
#COPY ./package*.json ./
RUN npm install
#COPY ./src ./src
EXPOSE $PORT
CMD ["npm", "start"]
