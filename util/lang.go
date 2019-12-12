package util

import (
	iso6391 "github.com/emvi/iso-639-1"
	"net/http"
	"strings"
)

var (
	supportedLangCodes = map[string]bool{"de": true}
	defaultLangCode    = "de"
)

func getLangCodeFromHeader(r *http.Request) string {
	header := r.Header.Get("Accept-Language")
	parts := strings.Split(header, ";")

	if len(parts) == 0 || len(parts[0]) < 2 {
		return defaultLangCode
	}

	code := strings.ToLower(parts[0][:2])

	if iso6391.ValidCode(code) {
		return code
	}

	return defaultLangCode
}

func GetLangCode(r *http.Request) string {
	langCode := getLangCodeFromHeader(r)

	if _, ok := supportedLangCodes[langCode]; ok {
		return langCode
	}

	return defaultLangCode
}
