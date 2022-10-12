OOP in ruby is just like OOP elsewhere
The basic code include:
1. Don't repeat yourself
2. Modularize your code
3. Have classes and Methods do one thing
4. Show as a little your interface to the world as possible

OOP usually has for concepts:
 1. ENCAPSULATION
    -  It hides the implementation details of a class from other objects due to which a class is unavailable to the rest of the code. Its main purpose is to protect data from data manipulation.
 2. POLYMORPHISM 
    - It is the ability to represent an operator or function in different ways for different data input.
 3. INHERITANCE
    - It creates new classes from pre defined classes. New class inherit behaviors of its parent class which is referred as superclass. In this way, pre defined classes can be made more reusable and useful.
 4. ABSTRACTION
    - It hides the complexity of a class by modelling classes appropriate to the problem

## [RUBY CLASS](./ruby_codes/rubyclass.rb)
it is defined with a class keyword followed by the class name and ends with `end`
Conventionally, class name must begin with a capital letter. Class name with more than one word run together with each word capitalized and no separating characters.

## [RUBY OBJECT](./ruby_codes/rubyclass.rb)
In ruby everything is an object. When we create objects, they communicate together through methods. Hence, an object is a combination of data and methods.

To create an object, first, we define a class. Single class can be used to create many objects. Objects are declared using new keyword. 

syntax  = `first_visitor = Greeter.new("Africa")`

## [RUBY METHODS](./ruby_codes/rubyclass.rb)
Methods are functions which are defined inside the body of a class. Data in Ruby is accessible only via methods.

A method is defined with def keyword and ends with end keyword.

## [INSTANCE METHODS](./ruby_codes/rubyclass.rb)
these are the methods found within a class
The instance methods are also defined with def keyword and they can be used using a class instance only

## [RUBY INHERITANCE](./ruby_codes/rubyclass.rb)
In inheritance, we create new classes using pre defined classes. Newly created classes are called derived classes and classes from which they are derived are called base classes. With inheritance, a code can be reused again which reduces the complexity of a program.

Ruby does not support multiple levels of inheritance. Instead it supports mixins.

In Ruby, < character is used to create a subclass. 
`parent class < subclass`

## [RUBY CONSTRUCTOR](./ruby_codes/rubyclass.rb)
A constructor is automatically called when an object is created. They do not return any values. In Ruby, they are called initialize

A constructor's main purpose is to initiate the state of an object. They can't be inherited. The parent object constructor is called with super method.
