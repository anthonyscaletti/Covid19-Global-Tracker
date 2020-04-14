FROM golang:alpine

COPY /client/dist /go/dist

COPY /server/src/webserver /go/src/webserver 

WORKDIR /go/src/app

COPY /server/src/app/main.go .

RUN go build -o main .

RUN go get -d -v ./...
RUN go install -v ./...

EXPOSE 4000

CMD ["app"]
ENTRYPOINT ["app", "-f=7", "-s=9"]