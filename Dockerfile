FROM node:14
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]