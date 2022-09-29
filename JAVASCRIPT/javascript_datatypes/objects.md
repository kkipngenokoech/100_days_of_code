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
    Gravity : 9.8,
    kirchoff's_laws : function () {
        return `${this.kirchoff's_second_law} and  ${this.kirchoff's_first_law} are kirchoff's laws`
    }

}
```
## accessing values in an object.
there are two ways to do so:
 1. using a dot(.) operator
        `LawsOfPhysics.Newton's_law_of_motion`
 2. using square brackets and quotes
        `LawsOfPhysics["Gravity"]`

## objects methods
in the created object above:
 kirchoff's_laws is an object method.
 we cannot use arrow functions here since this keyword refers to the scope within the function and not within the object.
 this keyword refers to the object in the normal functions.
1. Object.assign()
    to copy an object without modifying the original copy.
    `const copyteam = Object.assign({}, team)`
2. Object.keys()
    to get the keys or properties of an object as an array.
    `const.keys = Object.keys(copyteam)`
3. object.value()
    to get values of an object as an array.
    `const values = Object.values(copyteam)`
4. object.entries()
    to get both the key and value pairs of an object
    `const entries = Object.entries(copyteam)`
5. hasOwnProperty()
    to check if a specific key or property exists in an object.
    `copyteam.hasOwnProperty("team_name")`
 ## setting new keys for an object
 an object i mutable - it is a non-primitive datatype.
 we can modify content in it after it has been created.
 you can create or modify the properties.

