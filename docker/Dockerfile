FROM node:alpine as builder
RUN mkdir /build &&\
    cd /build &&\
    apk add git &&\
    git clone https://github.com/smprb/pb-ui.git . &&\
    npm i &&\
    npm run build &&\
    mkdir /app &&\
    cp -R build/* /app &&\
    cd /app && rm -rf /build

FROM nginx
EXPOSE 80
COPY --from=builder /app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
