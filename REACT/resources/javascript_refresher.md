# JAVASCRIPT
### (adding js to a web page)
javascript can be added to a web page in three ways:
    1. inline scripts
    2. internal scripts
    3. external scripts
    4. multiple scripts
##### inline scripts
```
<!doctype>
<html>
    <head>
        <title>inline scripting</title>
    </head>
    <body>
        <button onClick="alert('welcome to inline scripting')">Click Me</button>
    </body>
</html>
```

##### internal scripts
here the js going to be written in the head or the body.
```
<!doctype>
<html>
    <head>
        <title>internal scripts</title>
    </head>
    <body>
        <button onClick="alert('welcome to internal scripting')>Click Me </button>
        <script>
            console.log('multiverse generation')
        </script>
    </body>
</html>
```

##### external js
it can be added to the head or body(at the bottom of the js)
how to link it to our html?
```
...
<body>
    <script src = "nameofthefile.js"></script>
</body>
...
```
##### multiple external scripts
just add multiple scripts. as in the external js above.

# JAVASCRIPT VARIABLES.
we can use var, let or const.   
    var - this is a function scope
    let/const - block scope
# DATA TYPES
### primitive types
strings
numbers
booleans
undefined
null
symbol
objects
Bigint

# ARRAYS
it can store multiple values -  how to create arrays:
1. using array constructor 
    `const arr = Array()`
2. using square brackets 
    `const arr = []`
 N/B : Arrays can have items of different types
3. creating an array using split
    `let js = javascript`
    `const arr = js.split('')`
#### accessing arrays using items
you use indexes
    `nameofthearr = arr[0]`
#### modifying array element
arrays are mutable.
 `js[4] = 10`

 # METHODS TO MANIPULATE ARRAYS
 1. array constructor - to create array
    `const arr =  Array ()`
 2. creating a static array filled with static values
    `const eightXvalues = Array(8).fill('X')`
 3. concatenating using concat - concat two arrays for example
    `const concatedArray = firstArray.concat(secondArray)`