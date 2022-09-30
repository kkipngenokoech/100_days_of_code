the document object represents the whole html object.
when an html document is loaded in the browser it becomes a document object.
it is the root element that represents the html object.
it has properties and methods.
document is an object of the window and so: `window.document`

## properties of document object.
![document properties](/JAVASCRIPT/javascript_DOM/images/dom.jpg "document properties")

## methods of document object
we can access and change the content of document by its methods.
1. `write("string")` - writes the given string on the document.
2. `writeln("string")` - writes the given string on the document with a newline character at the end.
3. [`getElementById()`](./src/get_element_by_id.js):
    - returns the element given by the ID
    - here we need to define the Id of the input field for example.
4. `getElementsByName()` - returns all the element having the given name
5. `getElementsByTagName()` - returns all the elements having the given name value.
6. `getElementsByClassName()` - returns all the elements having the given class name.

