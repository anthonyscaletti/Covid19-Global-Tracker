package webserver

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

//LaunchWebServer launches GO Webserver to host Covid19 Global Tracker React application
func LaunchWebServer() {
	fs := http.FileServer(http.Dir("../../../client/dist"))

	http.Handle("/", fs)

	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	log.Println(fmt.Sprintf("Listening at Port %v", port))
	err := http.ListenAndServe(fmt.Sprintf(":%v", port), nil)

	if err != nil {
		log.Fatal(err)
	}
}
