package main

import (
	"fmt"
	"log"
	"net/http"
)

const PORT = 8080

type application struct {
	Domain string
}

func main() {
	// set application config
	var app application

	// read from command line

	// connect to the database

	app.Domain = "example.com"

	log.Println("Starting application on port", PORT)


	// start a web server
	err := http.ListenAndServe(fmt.Sprintf(":%d", PORT), app.routes())
	if err != nil {
		log.Fatal(err)
	}

}