#!/bin/bash

export SCHNITTFEST_HOST=localhost:8080
export SCHNITTFEST_LOGLEVEL=debug
export SCHNITTFEST_ALLOWED_ORIGINS=*
export SCHNITTFEST_TLS_ENABLE=false

go run main.go
