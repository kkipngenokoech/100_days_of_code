# CONSTRUCTOR FUNCTION

`new SuperDeveloper()` - this is a constructor developer.

we use `this` so as to make constructor a constructor.

```javascript
function SuperDeveloper(){
    this.name = 'kip'
}
```

constructors doesn't declare variables using either let, const or var but uses `this`.

constructor functions have an explicit return value, hence it has no return type.

## CREATING A NEW OBJECT

To create a new object:

`let developer = new SoftwareDeveloper()` - so you first create the constructor function and then you pass it to your new object.

## CREATING MULTIPLE  OBJECTS

we can use the same constructor to create as many objects as we did like.

## CONSTRUCTORS WITH PARAMETERS

constructors can have parameters.

## INSTANCE OF METHOD

`object instanceof constructorfuction` - see if the object is initialized under  a specific constructor function.

JavaScript's class system is built directly on using functions and objects. Calling (i.e., invoking) a constructor function with the new operator instantiates a new object. The same constructor function can be used to create different objects.
