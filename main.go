package main

import (
	"github.com/emvi/logbuch"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

const (
	staticDir       = "public/static"
	staticDirPrefix = "/static/"
	envPrefix       = "SCHNITTFEST_"
	pwdString       = "PASSWORD" // do not log passwords!

	defaultHttpWriteTimeout = 20
	defaultHttpReadTimeout  = 20
)

func configureLog() {
	logbuch.Info("Configure logging...")
	level := strings.ToLower(os.Getenv("SCHNITTFEST_LOGLEVEL"))

	if level == "debug" {
		logbuch.SetLevel(logbuch.LevelDebug)
	} else if level == "info" {
		logbuch.SetLevel(logbuch.LevelInfo)
	} else {
		logbuch.SetLevel(logbuch.LevelWarning)
	}
}

func logEnvConfig() {
	for _, e := range os.Environ() {
		if strings.HasPrefix(e, envPrefix) && !strings.Contains(e, pwdString) {
			pair := strings.Split(e, "=")
			logbuch.Info(pair[0] + "=" + pair[1])
		}
	}
}

func setupRouter() *mux.Router {
	router := mux.NewRouter()
	router.PathPrefix(staticDirPrefix).Handler(http.StripPrefix(staticDirPrefix, http.FileServer(http.Dir(staticDir))))
	return router
}

func configureCors(router *mux.Router) http.Handler {
	logbuch.Info("Configuring CORS...")

	origins := strings.Split(os.Getenv("ACCWEB_ALLOWED_ORIGINS"), ",")
	c := cors.New(cors.Options{
		AllowedOrigins:   origins,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
		Debug:            strings.ToLower(os.Getenv("ACCWEB_CORS_LOGLEVEL")) == "debug",
	})
	return c.Handler(router)
}

func start(handler http.Handler) {
	logbuch.Info("Starting server...")

	writeTimeout := defaultHttpWriteTimeout
	readTimeout := defaultHttpReadTimeout
	var err error

	if os.Getenv("ACCWEB_HTTP_WRITE_TIMEOUT") != "" {
		writeTimeout, err = strconv.Atoi(os.Getenv("ACCWEB_HTTP_WRITE_TIMEOUT"))

		if err != nil {
			logbuch.Fatal(err.Error())
		}
	}

	if os.Getenv("ACCWEB_HTTP_READ_TIMEOUT") != "" {
		readTimeout, err = strconv.Atoi(os.Getenv("ACCWEB_HTTP_READ_TIMEOUT"))

		if err != nil {
			logbuch.Fatal(err.Error())
		}
	}

	logbuch.Info("Using HTTP read/write timeouts", logbuch.Fields{"write_timeout": writeTimeout, "read_timeout": readTimeout})

	server := &http.Server{
		Handler:      handler,
		Addr:         os.Getenv("ACCWEB_HOST"),
		WriteTimeout: time.Duration(writeTimeout) * time.Second,
		ReadTimeout:  time.Duration(readTimeout) * time.Second,
	}

	// TODO certmagic
	if strings.ToLower(os.Getenv("ACCWEB_TLS_ENABLE")) == "true" {
		logbuch.Info("TLS enabled")
		logbuch.Fatal("Error starting server", server.ListenAndServeTLS(os.Getenv("ACCWEB_TLS_CERT"), os.Getenv("ACCWEB_TLS_PKEY")))
	} else {
		logbuch.Fatal("Error starting server", server.ListenAndServe())
	}
}

func main() {
	configureLog()
	logEnvConfig()
	router := setupRouter()
	corsConfig := configureCors(router)
	start(corsConfig)
}
