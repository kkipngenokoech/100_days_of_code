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
 4. get the length array of an element.
    `arr.length`
 5. getting an index of an element in an array
    `arr.indexOf(element in an array)` - it firsts checks if the array element exists, if it doesn't it returns -1 else returns the index
 6. getting last index of an element in an array
    `arr.lastIndexOf('element in an array')` - gives the position of the last item in the array , else returns -1.
 7. check if an element is in an array here thus returns true or false.
    `arr.includes(element in an array)`
 8. to check if the data type is an array:
    `Array.isArray(name of the array to be checked)`
 9. converting array to string:
    `arr.toString()`
 10. joining array elements:
    `arr.join()`
 11. slice array elements
    `arr.slice(start,ending_position)` - it doesn't include the ending position
 12. splice method 
    `arr.splice(starting position, number of times to be removed, number of items to be added)`
 13. adding items to an array using push
    `arr.push(element)` - it adds items to the end of the array.
 14. removing elements using pop
    `arr.pop()` - it takes no parameters and removes elements at the end of the array.
 15. remove elements using shift
    `arr.shift()` - removes elements from the beginning of an array -  takes no parameters
 16. add an element to an array at the beginning
    `arr.unshift(element)`
 17. reversing array order
    `arr.reverse()` - reverses the order of the array 
 18. sorting elements in an array.
    `arr.sort()` - takes no parameters.
 19. Array of arrays.
 ```
 const arrOfArr = [
    [1,2,3,4,5],
    [6,7,8,9,10]
 ]
 ```