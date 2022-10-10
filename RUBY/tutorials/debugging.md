## READING STACK TRACE
When your Ruby program crashes after encountering a runtime error or exception, it will produce a wall of text known as a stack trace that is then output in your terminal

The stack trace prints each line of code in your program that was executed before it crashed. The very first line of the stack trace will generally provide the most useful information about the error your program encountered.
First, this line of the stack trace will tell you what specific line caused the runtime error.

This line also provides a brief explanation of the error and the name of the error.

There you have it. The stack trace really is that simple. At this point, you know where in your code the exception is being raised, and you know the type of error you’re dealing with. You might even know what fixes need to be implemented in your code.

## DEBUGGING WITH PUTS
The debugging process is all about confirming assumptions about your code until you find something that goes against your assumptions. For example, does a variable or method return what you expect? Does a calculation or iteration over an array or hash give the output you expect?

The easiest and quickest way to confirm your assumptions while debugging is by using puts statements to output the return value of variables, methods, calculations, iterations, or even entire lines of code to your terminal.

## DEBUGGING WITH PUTS AND NIL
Using puts is a great way to debug, but there’s a HUGE caveat with using it: calling puts on anything that is nil or an empty string or collection will just print a blank line to your terminal.

This is one instance where using p will yield more information. As mentioned above, p is a combination of puts and #inspect, the latter of which essentially prints a string representation of whatever it’s called on.

## DEBUGGING WITH PRY-BYEBUG
Pry is a Ruby gem that provides you with an interactive REPL while your program is running. The REPL provided by Pry is very similar to IRB but has added functionality. The recommended Ruby gem for debugging is Pry-byebug and it includes Pry as a dependency. Pry-byebug adds step-by-step debugging and stack navigation.

To use Pry-byebug, you’ll first need to install it in your terminal by running gem install pry-byebug. You can then make it available in your program by requiring it at the top of your file with require 'pry-byebug'. Finally, to use Pry-byebug, you just need to call binding.pry at any point in your program

When your code executes and gets to binding.pry, it will open an IRB-like session in your terminal. You can then use that session to check the values of anything within the scope of where you included binding.pry. However, keep in mind that any code written after the binding.pry statement will not have been evaluated during the Pry session.

