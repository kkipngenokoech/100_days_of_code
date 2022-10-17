#!usr/bin/ruby

puts "Event Manager serialized"

# loading the data
eventContents = File.read("event_attendees.csv")

# puts eventContents - used for debugging

# accessing the data lines
eventLines = File.readlines('event_attendees.csv')
eventLines.each do |line|
    # used to escape the header line
    next if line == " ,RegDate,first_Name,last_Name,Email_Address,HomePhone,Street,City,State,Zipcode\n"
    columns = line.split(",")
    name = columns[2]
    puts name
    # puts "yes" - used for debugging
end