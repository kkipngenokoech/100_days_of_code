#!usr/bin/ruby

puts "Event Manager serialized"

# loading the data
eventContents = File.read("event_attendees.csv")

# puts eventContents - used for debugging

# accessing the data lines
eventLines = File.readlines('event_attendees.csv')
eventLines.each do |line|
    columns = line.split(",")
    name = columns[2]
    puts name
    # puts "yes" - used for debugging
end