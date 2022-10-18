## [javascript classes](./class.js)
we use the keyword `class` to create a class.
always remember to intialize a method called `constructor()`
A js class is not an object.
it is a template for javascript objects.

## javascript constructor()
If you do not define a constructor method, JavaScript will add an empty constructor method.

```
constructor(param1, param2)
{
    this.param1 = param1
    this.param2 = param2
}
```

## [class methods](class.js)
they are created the same way as object methods
```
getDetails() {
    return `${this.name}, ${this.year}`
}
```

your can add parameters to your methods
