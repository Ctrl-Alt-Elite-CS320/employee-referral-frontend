FROM node:14-alpine

LABEL author="Thien Tran" maintainer="contact@tommytran.io"

#Setting work directory
WORKDIR /srv/employee-referral-frontend

#Copying the code over
COPY . .

#Install the app
RUN yarn install

#Open port
EXPOSE 3000

#Command to run
CMD [ "yarn", "start" ]
