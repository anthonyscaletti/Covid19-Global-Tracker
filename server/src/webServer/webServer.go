package webServer

import (
	"fmt"	
	"log"
	"net/http"
	"os"
)

func LaunchWebServer() {
	fs := http.FileServer(http.Dir("../../../client/dist"))
	http.Handle("/", fs)
	port := os.Getenv("PORT")
	
	if len(port) == 0 {
		port = "5000"
	}

	log.Println(fmt.Sprintf("Listening at Port %v", port))
	err := http.ListenAndServe(port, nil)
	
	if err != nil {
		log.Fatal(err)
	}
}