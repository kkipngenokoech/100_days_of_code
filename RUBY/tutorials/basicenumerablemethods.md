## ENUMERABLES
are a set of convenient built-in methods in Ruby that are included as part of both arrays and hashes.


## THE EACH METHOD
Calling #each on an array will iterate through that array and will yield each element to a code block
```
UCLTEAMS = ["chelsea","Mancity","Totehnam","Barcelona"]
UCLTEAMS.each {|Team|puts "Welcome to UCL " + Team}

```
each allows us to iterate over the list
if we want to do more than one task(multi-line block) in the list, we - use a `do ...end` loop.
```
UCLTEAMS.each do |Team|
    puts "you are " + Team
    puts "your poisition is 3"
```

Each also works with hashes and it returns both the key and value
```
CHELSEA_PLAYERS = {
    "Hakim Ziyech" => "Morroco",
    "Christian Pulisic" => "USA"
    "Amando Broja" => "Albania"
}

CHELSEA_PLAYERS.each {|key, value| puts "country:" + value + " Name: " + key}
CHELSEA_PLAYERS.each {|pair| puts "player data: #{pair}"}
```

## THE EACH_WITH_INDEX METHOD
the difference between this and the #each method is that it yields two block variables instead of one.

 The first variable’s value is the element itself, while the second variable’s value is the index of that element within the array. This allows you to do things that are a bit more complex.

```
CITIES = ["Bangok", "Adis Ababa", "Brussels", "Helshinki"]
CITIES.each_with_index {|city, index| puts city if index.even?}
```

## THE MAP METHOD
it is also called `#collect`
transforms each element from an array according to whatever block you pass to it and returns the transformed elements in a new array.

the new returned array changes the original array.
`nameofarray.map{|listen|listen * 5}`

## THE SELECT METHOD
The #select method (also called #filter) passes every item in an array to a block and returns a new array with only the items for which the condition you set in the block evaluated to true.
`nameofarray.select {|listen| listen != 'Noise'}`

## THE REDUCE METHOD
it is also called the `#inject`.
The idea is simple enough, though: it reduces an array or hash down to a single object. You should use #reduce when you want to get an output of a single value.

## THE BANG METHODS
