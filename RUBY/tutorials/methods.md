everything in ruby is a method.thus ruby has only methods and not functions.

though methods and functions all refer to the same thing.

## RUBY BUILT IN METHODS
Methods are typically called by adding .method_name after an instance of the object that contains that method.

 this include puts, prints amongst other great inbuilt methods.

 It’s worth noting that in most languages, arguments are passed to methods by wrapping them in parentheses (). In Ruby, however, the parentheses are generally optional. 


 ## [CREATING A METHOD.](./ruby_codes/methods.rb)
 the syntax is found in this [ruby file](./ruby_codes/methods.rb)
 `def` -  is a built-in keyword that tells Ruby that this is the start of a method definition.

 `nameofmethod` - is the name of your new method. You can name your methods almost anything you want, but there are some constraints and conventions

 `code block` - All of the logic for your method is contained in the indented lines of the method body

 `end` - is a built-in keyword that tells Ruby that this is the end of the method definition.
To call the method, you simply need to use its name

the convention for a method name with multiple words is to use snake_case, separating words with underscores.

It’s good practice to start the method name with a lower-case character, because names that start with capital letters are constants in Ruby.

## [PARAMETERS AND ARGUMENTS](./ruby_codes/methods.rb)
Parameters are variables that your method will receive when it is called
parameters act as placeholder variables in the template of your method, whereas arguments are the actual variables that get passed to the method when it is called.

#### [DEFAULT PARAMETERS](./ruby_codes/methods.rb)
default parameter only takes effect if the argument is not provided

## [RETURN STATEMENT](./ruby_codes/methods.rb)
ruby has implicit return methods, that means if the keyword is not used inside the ruby method(explicit), then it returns the last executed statement

 An explicit return (using the keyword return) essentially tells Ruby, “This is the last expression you should evaluate.” 

 ## [CHAINING METHODS](./ruby_codes/methods.rb)
 Chaining methods together like this effectively has each method call build off of the outcome of the previous method in the chain. 

 ## PREDICATE METHODS
 this are ruby methods that have question mark at the end `even?, odd?`
 predicate methods, is a naming convention that Ruby uses for methods that return a Boolean, that is, they return either true or false.

 You can also create your own method with a ? at the end of its name to indicate that it returns a Boolean.

## BANG METHODS
methods don't normally override objects unless you reassign them i.e `whisper = whisper.downcase`
 Another way to do this type of reassignment is with bang methods, which are denoted with an exclamation mark (!) at the end of the method name.
 `whisper.downcase!`

 By adding a ! to the end of your method, you indicate that this method performs its action and simultaneously overwrites the value of the original object with the result