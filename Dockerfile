#Image for Node
FROM node:12.18-alpine AS builder

#Create a folder in the container
WORKDIR /usr/src/app

#Copy the package.json & package-lock.json
COPY package*.json ./

#Install npm packages
RUN npm install

#Copy all the code
COPY . .

#Run buld in staging config
RUN npm run build-staging

#Image for Nginx
FROM nginx:alpine

#Copy nginx config of the site
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

#Copy the dist of angular in a nginx folder
COPY --from=builder /usr/src/app/dist/lavalotu-front /usr/share/nginx/html

#Expose the port of the container
EXPOSE 80

#Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
