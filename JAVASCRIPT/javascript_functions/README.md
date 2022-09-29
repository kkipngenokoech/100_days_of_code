A function is a reusable block of code, or programming statements designed to perform a certain task.

A function is declared by a function key word and followed by parenthesis which can take a parameter.
    `function greetings() {}`
a function can be created in a couple of ways:
    1. Declaration function
    2. Expression function
    3. Anonymous function
    4. Arrow function

## FUNCTION DECLARATION
```
function function_name(){

}
function_name() //calling a function
```

functions can receive a parameter from different data types: numbers, strings, booleans, object, functions.

## functions with unlimited number of parameters
A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions
```
function functionwithmanyarguements (){
    console.log (arguments)
}
```
the above method is used with a normal function.
see below the arrow function:
arrow function doesn't have the function arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. 
the spread operator is `...`
```
const sumargs = (...args) => {
    console.log(args)
}
```
## anonymous functions
these are functions without names.
```
const anonymous = function(){

}
```

## expression functions
these are anonymous functions which we assign to a variable, so you can always return a value from the anonymous function when we call the variable
```
let square = function (n){
    return n*n;
}
square(4)
```
## self-invoking functions
these are anonymous functions that needs not to be called to return a value. you enclose the entire function with brackets ()
```
(function (n){
    return n*n
})(20);   
```
## arrow functions
here arrow functions use the arrows instead of the keyword function, to declare a function.
```
const square = (length) => {

}
```
