# [THIS](this.js)

this refers to the current object being constructed.

## ASSIGNING THIS KEYWORD

this is never assigned to anything until the method that actually uses it is called.

## WAYS OF CALLING FUNCTIONS AND ASSIGNING KEYWORDS

1. calling a constructor function with a new keyword
2. returning a function itself
3. assigning it to the methods
4. calling functions that allows us to set the key word by ourselves.

in a nutshell:

If a constructor function is called with the new operator, the value of this is set to the newly-created object. If a method is invoked on an object, this is set to that object itself. And if a function is simply invoked, this is set to the global object: window.

## Summary

Functions, objects, and this are all interconnected. When invoking constructor functions with the new operator, a this variable is set to the newly-created object. When invoking a method on an object, this is set to that object itself. And when invoking a function in a browser environment, this is set to window, otherwise known as the global object.

Along with all this, there is yet one more set of ways to invoke functions: with apply(), and with call(). Both methods share quite a few similarities, and they each allow us to specify how we want to set this. We'll take a look at each of them in detail next!
