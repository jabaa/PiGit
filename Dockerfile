FROM node

RUN mkdir /PiGit
WORKDIR /PiGit

COPY ./package.json .
COPY ./gulpfile.ts .
COPY ./nodemon.json .
COPY ./tsconfig.json .

RUN npm install

EXPOSE 8000
CMD ["npm", "start"]
