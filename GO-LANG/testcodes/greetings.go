package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println("Hello, enter your name:")
	var username string
	fmt.Scanln(&username)
	username = strings.TrimSpace(username)
	fmt.Printf("Hi, %s!, I am go languange", username)
}
