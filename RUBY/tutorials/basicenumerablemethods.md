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