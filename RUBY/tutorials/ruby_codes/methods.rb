#!usr/bin/ruby
def returnname
    'multiverse'
end

puts returnname

def user_input(name = 'user')
    "Hey " + name + " welcome to multiverse"
end
print 'please enter your username:'
username = gets.chomp
if username == ''
    puts user_input
else
    puts user_input(username)
end


# chaining methods - you first reverse, the result of the reverse you join then you capitalize
phrase = ["be", "to", "not", "or", "be", "to"]

puts phrase.reverse.join(" ").capitalize