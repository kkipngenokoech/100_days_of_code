## variables
variables are ways of assigning data in your programs.
variable names are reusable, so you can assign a new value to a variable at any point in your program.
## naming variables in ruby
Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.
1. variable names should always be lowercase
2. split words with underscore.
variables in ruby can be:
1. local variables
    -   A local variable name starts with a lowercase letter or underscore (_). It is only accessible or have its scope within the block of its initialization. Once the code block completes, variable has no scope.

    -   When uninitialized local variables are called, they are interpreted as call to a method that has no arguments.
2. class variables
    - A class variable name starts with @@ sign. They need to be initialized before use. A class variable belongs to the whole class and can be accessible from anywhere inside the class. If the value will be changed at one instance, it will be changed at every instance.

    - A class variable is shared by all the descendents of the class. An uninitialized class variable will result in an error.
3. instance variables
    - An instance variable name starts with a @ sign. It belongs to one instance of the class and can be accessed from any instance of the class within a method. They only have limited access to a particular instance of a class.

    - They don't need to be initialize. An uninitialized instance variable will have a nil value.
5. global variables
    - A global variable name starts with a $ sign. Its scope is globally, means it can be accessed from any where in a program.

    - An uninitialized global variable will have a nil value. It is advised not to use them as they make programs cryptic and complex.

    - There are a number of predefined global variables in Ruby