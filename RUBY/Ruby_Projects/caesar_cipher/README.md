this project is meant to help me solidify my knowledge on ruby's:
    [strings](../tutorials/strings.md)
    arrays
    hashes

## WHAT'S IS CAESAR CIPHER?
it is an encryption technique. - a substitution technique.
each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet

if we want to encrypt let's say letter `A`, using a key of 3, you get `D`.

## CODE EXPLANATION.
our method receives a string of words and then it breaks it down into an array.
`yourString.split("").to_a`

now we have to turn the character array into its integer ordinal.
`#ord`. you iterate over the new array you have and turn it into an integer ordinal.

you store the ordinals in an array in which you are going to alter the number using the key you input.

## encrypting
now we want to encrypt your ordinals into a word.

