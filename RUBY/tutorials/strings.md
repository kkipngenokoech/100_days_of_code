strings can be build using string literals `""` or `''`
the two string literals have some differences.

## concatinating strings in Ruby
1. using the plus operator:
    - `'welcome' + 'to' + 'multiverse'`
2. with the shovel operator:
    - `'welcome' << 'to' << 'multiverse'`
3. with the concat method:
    - `'welcome '.concat('to ').concat('multiverse')`

## substrings
you can access the strings substrings by using indexes:
    -   `'multiverse'[0] = 'M'`
accessing a number of them:
    - `'multiverse'[0..1] = 'mu'`
you can also:
    - `'multiverse'[0,4] = 'mult'`
accessing from the tail end:
    - `'multiverse'[-1] = 'e'`
## string escape characters:
this allows one to include whitespaces and special characters in your string. this works on double quotes only:
`\\` - including a backslash in your string
`\b` - backspace
`\r` - carriage return
`\n` - newline
`\s` - space
`\t` - tabspace
`\"`- double quotation mark
`\'` - single quotation mark

## string interpolation
this allows one to interpolate strings that contain placeholder variable - thats they have names i.e `name = 'multiverse`
so when echoing the variable name ensure you use double quotes:
    `puts "Hello and welcome to #{name}"`
## ruby string methods
[documentation for ruby strings](https://ruby-doc.org/core-3.1.2/String.html)
some of the majorly used methods include:
1. capitalize:
    - `'multiverse'.capitalize` - capitalizes the first letter of the string
2. include:
    - `'multiverse'.include?('tiver')` - does your string include this substring?
3. upcase:
    - `'multiverse'.upcase'` - uppercase all the letters in your string
4. downcase:
    - `'MULTIVERSE'.downcase'` - downcase all the letters in your string
5. empty:
    - `'multiverse'.empty?'` - is your string empty?
6. length:
    - `'multiverse'.length` - find the length of your string
7. reverse:
    - `'multiverse'.reverse` - reverse your string
8. split:
    - `'multiverse'.split`  - splits your strings into two.
9. strip:
    - `' multiverse'.strip ` - strips the whitespaces around your string

## convert other objects to strings
you use the .to_s method:
 - `5.to_s`