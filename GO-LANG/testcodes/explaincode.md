# TEST
link:  [test.go](./test.go)

`package main` - package is a go keyword that defines which bundle this file belongs to, there can be only one package per folder.

`import` - it is a go keyword that tells the go compiler which other packages you want to use in the file.
`import fmt` -is a package that provides formatting and printing functions that can be useful when developing.
`fmt.println` - prints a line in our case `hello, multiverse`

# GREETINGS
link: [greetings.go](./greetings.go)
what's different with the first code is:
    `var username string` - here a variable is created of the name username, with value as string
    `fmt.scanln(&username)` - assigns user input to the username.
                           - this line tells to computer to wait for the keyboard ending with a newline.
    `fmt.printf("Hi, %s!, I am go", username)` -displaying string 