package main

import (
  "log"
  "net/http"
)

const app_path = "../build";

func main() {
	fs := http.FileServer(http.Dir( app_path ));
	http.Handle("/", http.StripPrefix("/", fs));

  log.Println("Listening...")
  http.ListenAndServe(":3000", nil)
}
