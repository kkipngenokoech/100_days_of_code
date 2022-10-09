arrays in ruby can be created using array literals, using this method `Array.new()`, or using square brackets `[]`

## `Array.new()`
it can take upto tw optional parameters: initial size and default value
    - `Array.new(3,7)` - 3 elements each with default value of 7

## accesing elements in arrays
just like other programming languages, you use index(zero-based indexing)
    -`Array[7]`
calling an invalid position returns nil
Ruby also recognizes the use of negative indices, which returns elements starting from the end of an array.

## ruby first and last methods
`myArray.first(3)`- returns the first three elements of myArray
`myArray.last(4)` - returns the last three elements of myArray.

## Adding and removing elements 
you just use the push and pop method, or the shovel operator.
`myArray.push(3,4)` - it adds the element at the end of the an array and returns the array with new elements.
`myArray.pop` - it removes the last element in the array, and returns the removed element
`myArray << 5` - it adds elements at the end of the array and returns the array with the new elements.

## shift and unshift
these are used to add elements at the beginning of an array
The #unshift method adds elements to the beginning of an array and returns that array (much like #push). 
`myArray.unshift(5)`
The #shift method removes the first element of an array and returns that element (much like #pop).
`myArray.shift`

It’s also useful to know that both #pop and #shift can take integer arguments:

`myArray.pop(3), myArray.shift(2)` - the number of elements it's going to be removed.

## adding and subtracting Arrays.
Adding two arrays will return a new array built by concatenating them, similar to string concatenation.
`[1,2,3,4,5] + [6,7,8,9,10] = [1,2,3,4,5,6,7,8,9,10]`
 The concat method works the same way.
 `myArray1.concat(myArray2)`

 To find the difference between two arrays, you can subtract them using -. This method returns a copy of the first array, removing any elements that appear in the second array.
 `[1, 1, 1, 2, 2, 3, 4] - [1, 4]  #=> [2, 2, 3]`

 ## arrays methods
 to get all methods, you: `myArray.methods`
 1. checking if empty
    - `myArray.empty?`
 2. checking number of elements in the array
    - `myArray.length`
 3. to reverse the array
    - `myArray.reverse`
 4. to check if a specific element is included in the array
    - `myArray.include?(4)`
 5. to join arrays in an element into one
    - `myArray.join, myArray.join("-")`
