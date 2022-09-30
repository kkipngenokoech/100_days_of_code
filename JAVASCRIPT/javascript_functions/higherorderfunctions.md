these are functions which take other functions as parameters or return a function as a value.
the function passed as a parameter is called a callback - a callback is a function which can be passed as a parameter to another function.
```
const name = (name) => {
    return `hi ${name}`
}

const greetings = (callback,firstname) => {
    return callback(firstname)
}
greetings(name, 'lastname')
```