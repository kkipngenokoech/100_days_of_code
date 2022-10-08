#!usr/bin/ruby
index = 0
while (index < 5)
    puts index
    index += 1
    redo if (index == 5)
end