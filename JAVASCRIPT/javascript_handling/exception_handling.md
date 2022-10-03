## exception handling in js
An exception signifies the presence of an abnormal condition which requires special operable techniques.

 exception handling is a process or method used for handling the abnormal statements in the code and executing them. It also enables to handle the flow control of the code/program. For handling the code, various handlers are used that process the exception and execute the code.

 ## types of errors
 1. syntax errors
    -   the way a programming language has to be written, its grammatical blueprint
2.  runtime errors
    - this is when an error runs during an execution of a program.
    - The codes which create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.
3. logical errors
    - An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally.

## Error object
when an runtime error occurs, it creates and throws an error object.Such an object can be used as a base for the user-defined exceptions too.

an error object has two properties:
1. name 
    -  This is an object property that sets or returns an error name.
2. message
    -   This property returns an error message in the string form

## standard built-in errors
1. EvalError - it creates an error instance for the error that occurred in the (eval),a global function used for evaluating the js string code.
2. InternalError - it creates an instance when the js engine throws an internal engine.
3. RangeError -  It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.
4. ReferenceError - It creates an instance for the error that occurs when an invalid reference is de-referenced.
5. SyntaxError - An instance is created for the syntax error that may occur while parsing the eval().
6. TypeError - When a variable is not a valid type, an instance is created for such an error.
7. URIError - An instance is created for the error that occurs when invalid parameters are passed in encodeURI() or decodeURI().

## EXCEPTION HANDLING STATEMENTS
1. throw statements
2. try...catch statements
    - it initially tests the code for all possible, errors it may contain, then it implements actions taken to tackle those errors.
    - `try() statement` - here, the code which needs possible testing for errors is kept in this block. In case the error occurs, it passes the catch block for taking suitable actions and handles the error.
    - `catch() statement` -  this block handles the error of the code, by executing the set of code within the block.This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.

3. try...catch...finally statements