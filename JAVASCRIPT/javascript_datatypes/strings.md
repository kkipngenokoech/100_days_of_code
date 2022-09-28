a collection of one or more characters between two single quotes or double quotes or backticks.
    `let greetings = "hello multiverse"`
## strings manipulation
1. string concatenation
connecting two or more strings together
    -using an addition operator -  `let fullName = LastName + FirstName`
    -you can use backslash characters to show that a line will continue on the next line
N/B : to inject data into js you use back ticks.

## string methods
Everything in javascript is an object.
1. length
    this method returns the numbers of chars, in a string including empty space.
    `variablenumber.length`
2. Accessing characters in a string.
we cannot access each characters in a string  using its index.and it starts from 0.
    `variablenumber[index]`
3. toUpperCase() - this method changes the strings to uppercase letters.
    `firstName.toUpperCase()`
4. toLowerCase() - this method changes the strings to lowercase.
    `firstName.toLowerCase()`
5. substr() - it takes two arguments, the starting index and the number of characters to slice.
    `firstName.(3,6)`
6. substring() - it takes two arguments,the starting index, the stopping index, but it doesn't include the character at the stopping index.

7. split() 
    the split method splits a string at a specific place.it splits them into arrays.
    `firstName.split()` - changes a string to array
    `firstName.split(' ')` - splits that array using spaces
    `firstName.split(,)` - splits arrays using commas.
8. trim()
    remove trailing spaces in the beginning and the end of a string.
    `firstName.trim()`
9. includes()
    it takes a substring argument and it checks if substring exists in the strings. includes() returns a boolean. it returns true/false.
    `firstName.includes('element')`
10. replace()
    takes as a parameter the old substring and replaces it with a new substring
    `firstName.replace('kip', 'chep')`
11. charAt()
    takes indexes and it return char code(ASCII NUMBER) of the value at that index.
    `firstName.charAt(index)`
12. indexOf()
    takes a substring and if substring exists it returns the first position of the substring if it doesn't exists it returns -1
    `string.indexOf(substring)`
13. repeat()
    
