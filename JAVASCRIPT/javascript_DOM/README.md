## DOM 
Document Object Module - tree like rep of the contents of a webpage.


the document object represents the whole html object.
when an html document is loaded in the browser it becomes a document object.
it is the root element that represents the html object.
it has properties and methods.
document is an object of the window and so: `window.document`

HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript.

## properties of document object.
![document properties](/JAVASCRIPT/javascript_DOM/images/dom.jpg "document properties")

## methods of document object
we can access and change the content of document by its methods.
1. `write("string")` - writes the given string on the document.
2. `writeln("string")` - writes the given string on the document with a newline character at the end.
3. [`getElementById()`](./src/get_element_by_id.js):
    - returns the element given by the ID
    - here we need to define the Id of the input field for example.
4. [`getElementsByName()` ](./src/get_element_by_name.js)
    - returns all the element having the given name
5. [`getElementsByTagName()` ](./src/get_element_by_tag.js)
    - returns all the elements having the given name value.

6. `getElementsByClassName()` - returns all the elements having the given class name.

The [innerHTML](./src/innerHTML.js)  can be used to write the dynamic html on the html document.

The [innerText](./src/innerText.js) - this property can be used to write the dynamic text on the HTML document. Here text would not be interpreted  as html text but normal text.

It is used mostly in the web pages to generate the dynamic content such as writing the validation message, password strength etc.

## TARGETING NODES WITH SELECTORS
```
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```
how to access display node:
`#container > .display`, `.display`, `div.display`, `div#container > .div.display`.

## queryselector
`element.querySelector(selector)` - returns a reference to the first match of the selector.
`element.querySelectorAll(selectors)`- returns a node list containing references to all of the matches of the selectors.

## ELEMENT CREATION UNDER js
sometimes we want to create an hypotetical element using js 
to do that we use `.createElement`
`const div = document.createElement(tagName(i.e "div"),optional parameters)`
this function doesn't put your new element into the DOM - it simply creates it in memory.

to send our `div` to the DOM, or our webpage for that matter:
1. Append Elements - `ParentNode.appendChild(ChildNode)` - appends childNode as the last child of parentNode
2. `parentNode.insertBefore(newNode, referenceNode)` -inserts newNode into parentNode before referenceNode.

## REMOVING THE ELEMENTS
`parentNode.removeChild(child)` - removes child from parentNode on the DOM and returns a reference to child.


## ALTERING ELEMENTS
when you have a reference to an element, you can use that reference to alter the element's own properties.
i.e `const div = document.createElement('div')`, to alter  = `div.style.color = 'blue'`


## EDITING ATTRIBUTES
`div.setAttribute('id','theDiv')` - if id exists, update it to theDiv else create id with the div
`div.getAttribute('id)` - returns value of the specified attribute ("theDiv")
`div.removeAttribute('id')` - deletes the specified attribute.

## WORKING WITH CLASSES
`div.classList.add('new')` - adds class 'new' to your new div
`div.classList.remove('new')` - removes new class from div.
`div.classList.toggle('active')` - if the div doesn't have class 'active' add it, or if it does remove it.

## ADDING TEXT CONTENT
to add a text content to your element
`div.textContent = "hello World!"`
## ADDING HTML CONTENT
you : `div.innerHTML  = <span>Hello world</span>`