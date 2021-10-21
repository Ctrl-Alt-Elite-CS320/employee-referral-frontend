FROM node:14-alpine

LABEL author="Thien Tran" maintainer="contact@tommytran.io"

#Updating Alpine
RUN apk upgrade -U

#Setting work directory
WORKDIR /srv/employee-referral-frontend

#Copying the code over
COPY . .

#Install the app
RUN npm install

#Open port
EXPOSE 3000

#Command to run
CMD [ "npm", "start" ]
