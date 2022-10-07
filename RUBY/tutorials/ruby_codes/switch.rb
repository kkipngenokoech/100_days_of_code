#!/usr/bin/ruby

print "Enter your favorite day:"
favorite_day = gets.chomp
case favorite_day
when "Monday"
    puts "fun fact about people who love #{favorite_day}, is that's their best time of the week to set goals and start new projects"
when "Tuesday"    
    puts "Aaaah #{favorite_day} guy, it is definetly the healithiest day of the week."
else
    puts 'fantastic day you chose there'
end