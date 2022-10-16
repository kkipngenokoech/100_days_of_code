## [FACTORY FUNCTIONS](./factoryfunctions.js)
Factory functions are used in place of constructors.

The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object when you call the function

N/B : you cannot use a arrow functions to create constructors with the new keyword, when you want to use `new` use then the normal functions.


## SCOPE AND CLOSURE
#### SCOPE
All scopes in JavaScript are created with Function Scope only, they aren’t created by for or while loops or expression statements like if or switch. New functions = new scope - that’s the rule

functions created inside a function cannot be accessed directly outside the function.
#### CLOSURE
The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope.