to run a ruby file: `ruby name_of_the_file.rb`
Ruby ignores white space characters and tabs.


Ruby interprets semicolons and newline characters as the ending of a statement. However, if Ruby encounters operators, such as +, −, or backslash at the end of a line, they indicate the continuation of a statement.

##  ruby identifiers
this include variables, constants and methods.  
they are case sensitive
ruby identifiers may include alphanumeric characters, and the underscore characters.

## Here document in ruby
if you want to write a paragaph or something in ruby
you use the 'here document technique:
"Here Document" refers to build strings from multiple lines. Following a << you can specify a string or an identifier to terminate the string literal, and all lines following the current line up to the terminator are the value of the string.
If the terminator is quoted, the type of quotes determines the type of the line-oriented string literal. Notice there must be no space between << and the terminator.
i.e 
```
prints <<EOF
a lot of blatant music
even more blatant music
EOF

#or
print <<"EOF";                # same as above
   This is the second way of creating
   here document ie. multiple line string.
EOF

print <<`EOC`                 # execute commands
	echo hi there
	echo lo there
EOC

print <<"foo", <<"bar"  # you can stack them
	I said foo.
foo
	I said bar.
bar
```

## [BEGIN SYNTAX](./ruby_codes/begin.rb)
this is the very first code that will be executed before the program code runs

## ruby comments
similar to python : use the `#`
or you hide comments in between the `=begin     =end` key words.

## ruby as an OOP
ruby is an object oriented language and everything in ruby is an object.
it has features such as:
 Data Encapsulation
 Data Abstraction
 Polymorphism
 Inheritance
an oop language involves [classes and objects.](./ruby_codes/class.rb)
A class blue print in ruby:
```
class Vehicle {
    Number no_of_wheels
    Number horsepower
    Characters type_of_tank
    function speeding {

    }
    function halting {

    }
    function driving {

    }
}
```
defining class in ruby? it always start with the keyword `class`
you terminate a class in ruby by using the keyword `end`
All data members are in between the keyword class and end

## VARIABLES IN RUBY
1. local variables:
    these are variables that are defined in a method
2. instance variables:
    variables available across all methods under a particular instance or object, instance objects are preceded by `@` followed by the variable name.
3. class variables:
    they are available across different objects. it belongs to the class and is a characteristic of that particular class, the variable names are preceded by `@@`
4. Global Variables:
    these are variables available across multiple classes., the variable names are always preceded by a dollar sign `$`
## creating objects in ruby:
objects are instances of classes and you use the keyword `new` to create  an object class `new_customer = Customer.new`

to get user inputs or parameters for [class](./ruby_codes/class.rb) ensure you use the `initiaalize() method`

## ruby methods
in ruby functions are known as methods.
same to the class , you end a function/method using an `end` keyword.
to access a class method : `nameofobject.methodname`