javascript has 8 datatypes:
## primitive datatypes:
primitive data types are immutable - they are predefined data types in js.
    1. [Numbers](./numbers.md) - integers & floats
    2. [strings](./strings.md)
    3. [Boolean](./boolean.md)
    4. [undefined](./undefined.md)
    5. [null](./null.md)
    6. [symbols](./symbols.md)

for one to check for datatypes, you use typeof operator:
    `console.log(typeof 'Multiverse')`

## VARIABLES
variables are containers of data.
they are used to store data in a memory location.
when a variable is declared a memory location is reserved, and then when a variable is assigned data, that reserved memory location holds/is filled with the data.

we use `let`, `const` and `var` to declare variables
variable names should:
    not start with a number
    should not allow with special characters except underscore and dollar sign
    should not have space in between the name.
    should follow camelCase notation.