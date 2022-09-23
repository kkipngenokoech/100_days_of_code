## Blueprint for my project
1. create an input type to enter the item
2. Button to submit the item
3. A list to display the items along with functionality to delete and mark it complete.
[link to site](https://kip-grocery-list.netlify.app/)
## concepts used in this project include:
1. react hooks
2. creating basic forms in react js
3. arrays
4. objects
5. arrow functions
6. spread operators
7. props

[App.js](./src/components/App.js)
state 'item' - stores the state of the items entered by the user
state 'list' - to store a collection of items in a list.
handleChange arrow function - whenever a user enters anew value to the  input form
change the state by using setItem and assign it to the target value.

handleSubmit - it updates the list with items every other time the user adds anew product.
uuuid creates a unique id for our products.
