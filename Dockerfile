FROM golang AS build
RUN apt-get update && \
	apt-get upgrade -y && \
	apt-get install -y curl && \
	curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh && bash nodesource_setup.sh && \
	apt-get install -y nodejs
WORKDIR /go/src/github.com/Kugelschieber/schnittfest
ADD . .

# build server
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags "-s -w" /go/src/github.com/Kugelschieber/schnittfest/main.go && \
	mkdir /app && mv /go/src/github.com/Kugelschieber/schnittfest/main /app/server

# compile CSS
RUN cd /go/src/github.com/Kugelschieber/schnittfest/style && bash -c "npm i" && bash -c "npm rebuild node-sass" && bash -c "npm run style"

# copy resources
RUN mv /go/src/github.com/Kugelschieber/schnittfest/template /app/template && \
    mv /go/src/github.com/Kugelschieber/schnittfest/static /app/static

FROM alpine
RUN apk update && \
    apk upgrade && \
    apk add --no-cache && \
    apk add ca-certificates && \
    rm -rf /var/cache/apk/*
COPY --from=build /app /app
WORKDIR /app

RUN addgroup -S appuser && \
    adduser -S -G appuser appuser && \
    chown -R appuser:appuser /app
USER appuser

# default config
ENV SCHNITTFEST_HOST=0.0.0.0:80
ENV SCHNITTFEST_LOGLEVEL=info
ENV SCHNITTFEST_ALLOWED_ORIGINS=*
ENV SCHNITTFEST_HTTP_WRITE_TIMEOUT=5
ENV SCHNITTFEST_HTTP_READ_TIMEOUT=5

# run
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["/app/server"]
