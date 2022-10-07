#!/usr/bin/ruby
# used to get users inputs
index_age = gets.chomp.to_i
if index_age >= 18
    puts 'you are eligible to vote'
elsif index_age >= 16 && index_age <= 18
    print "current age is just a little short for voting\n"
    puts 'will you like to vote in the next elections when you qualify?'
    adult_choice = gets.chomp.downcase
    puts "#{adult_choice} == "yes"?"thats a champ":"that's sad to hear"#
else 
    puts 'you are not eligible to vote'
end