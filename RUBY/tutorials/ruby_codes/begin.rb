#!/usr/bin/ruby

puts 'testing the begin syntax in ruby'

END {
    puts "and this code will execute last"
}
BEGIN{
        puts "this code will run first since it is within the begin syntax"
    }