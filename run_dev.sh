#!/bin/bash

export SCHNITTFEST_HOST=localhost:8080
export SCHNITTFEST_LOGLEVEL=debug
export SCHNITTFEST_ALLOWED_ORIGINS=*
export SCHNITTFEST_TLS_ENABLE=false
export SCHNITTFEST_DISABLE_CACHE=true

go run main.go
