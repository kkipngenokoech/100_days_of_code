#!usr/bin/ruby
require "csv"
puts "eventManager initialized"

eventContents = CSV.open('event_attendees.csv', headers: true)

eventContents.each do |row|
    name = row[2]
    puts name
end
