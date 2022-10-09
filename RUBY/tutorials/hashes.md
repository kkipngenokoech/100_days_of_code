hashes are arrays super cousin.Ruby hashes are more advanced collections of data and are similar to objects in JavaScript and dictionaries in Python if you’re familiar with those.

it has a key value pair.
hashes are unordered.

# [creating hashes](./ruby_codes/hashes.rb)
you create hashes like you do in python dictionaries, thats using curly braces `{}`, but linking key values you use '`=>`', it is called an hash rocket.

the values of a hash can be a number, a string, an array, or even another hash.

you can also create a hash using the `new` method
`first_hash = Hash.new`

## [accessing values in an hash](./ruby_codes/hashes.rb)
You can access values in a hash the same way that you access elements in an array. When you call a hash’s value by key, the key goes inside a pair of brackets, just like when you’re calling an array by index.
`first_hash["GOAT"]`

if you try accessing a key that doesn't exists, it returns `nil`

## [adding data to hashes](./ruby_codes/hashes.rb)
You can add a key-value pair to a hash by calling the key and setting the value, just like you would with any other variable.
    `first_hash['GOALS'] = 23`
this method can also be used to change existing data.

## [removing data in a hash](./ruby_codes/hashes.rb)
you use the delete method
`first_hash.delete('GOALS')`


## METHODS IN RUBY HASHES
A couple of useful methods that are specific to hashes are the #keys and #values methods, which very unsurprisingly return the keys and values of a hash, respectively. Note that both of these methods return arrays.

## merging two hashes.
when merging two hashes you use the `merge` method. the latter value often overrides the former if two keys are the same.

## symbols as hashes
there are two ways of declaring symbols in hashes
```
#rocket_syntax
american_cars = {
  :chevrolet => "Corvette",
  :ford => "Mustang",
  :dodge => "Ram"
}
# 'Symbols' syntax
japanese_cars = {
  honda: "Accord",
  toyota: "Corolla",
  nissan: "Altima"
}
```

to access the value of symbol made syntaxes:
 `american_cars[:chevrolet]`