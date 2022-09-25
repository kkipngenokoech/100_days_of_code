my Go-language begins today 23rd september 2022
Go was designed to :
    do fast compilation
    ease programming
    efficient execution in production
filtering data in git - git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch fixtures/11_user_answer.json'    

## GOPATH
this is used in the concept of the folder structure 
it helps us understand the go development environment, understand how go finds, installs, and build source code files.

## gopath environment variable
Go  assumes (by default) that GOPATH location is `$HOME/go`

## GOROOT
this is where Go code(this is not our source code), compiler and tooling lives.

`usr/local/go`

## Anatomy of Go Workspace
inside the GOPATH there are three directories 
    1. bin
    2. pkg
    3. src
        i. github.com/foo/bar
            i.bar.go
#### `$GOPATH/bin`
this is a directory where Go places binaries that go installs and compile.

#### `$GOPATH/pkg`
here go stores pre-compiled object file to speed up subsequent compiling of programs - when you experience issues with compilation, you can safely delete this directory and go will then rebuild it for you

#### `src`
here's where all our .go files or source code for that matter go. 
as we write Go applications, packages, and libraries we will place them under this `$GOPATH/src/path/to/code`
All our packages live here, so to import a specific package(if it lives in `$GOPATH/src/path/blue/red`) you import `import blue/red`
if the packages live in github or an online link, you use the absolute link to import them

## commenting code in go
`//` - single line comment
`/* */` - multiline comment