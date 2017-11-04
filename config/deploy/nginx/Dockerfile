FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
ADD api-rekognition.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]