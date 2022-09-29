## scope
a variable can be locally scoped or globally scoped.
anything declared without let, var, const is scoped at global level.
i.e
```
//scope.js
name = "West Brom"
city = "West Bromwich"
the two above becomes window objects, and they are available anywhere.
```

## Global Scope
a globally declared variable can be access anywhere in the same file.but the term global is relative to the file, or to some lines of code

## local scope.
it can be accessed only in a certain block of code
1. block scope
2. function scope
A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

# OBJECTS
everything can be an object and objects can have properties and values.
an object is a key value pair.
to create an object, we use two curly braces:
    `const multiverse = {}` - this is an empty object.
creating an object with key value pairs:
```
const LawsOfPhysics = {
    Newton's_law_of_motion : " F = ma ",
    Kirchoff's_Second_Law : "the sum of all voltages around a closed loop in any circuit must be equal to zero.",
    kichorffs_first_law : "at a junction in an electrical circuit, the sum of currents flowing into the junction is equal to the sum of currents flowing out of the junction.",
    Planck_constant : "6.62607015 × 10-34 m2 kg / s",
    Gravity : 9.8

}
```
## accessing values in an object.
there are two ways to do so:
 1. using a dot(.) operator
        `LawsOfPhysics.Newton's_law_of_motion`
 2. using square brackets and quotes
        `LawsOfPhysics["Gravity"]`
