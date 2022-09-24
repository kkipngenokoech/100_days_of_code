package main

import "fmt"

func main() {
	fmt.Println("Hello, enter your name:")
	var username string
	fmt.Scanln(&username)
	fmt.Printf("Hi, %s!, I am go languange", username)
}
