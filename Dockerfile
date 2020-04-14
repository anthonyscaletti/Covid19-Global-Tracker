FROM golang:alpine

ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /build

COPY . .

WORKDIR /build/server/src/app/

RUN go build -o main .

# WORKDIR /dist

# RUN cp /build/main .

EXPOSE 5000

CMD ["/server/src/app/main"]