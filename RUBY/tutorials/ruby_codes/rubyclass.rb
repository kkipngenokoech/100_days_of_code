#!usr/bin/ruby
# creating class Greeter
class Greeter
    ## constructor method
    def initialize( name = "Multiverse")
        @name = name
    end
    ## instance methods
    def welcome_guest
        puts "welcome #{@name}"
    end
    def bid_guest
        puts "Good bye #{@name}"
    end

end
 kip = Greeter.new("kip")

 ## ruby methods
def ruby_method
    puts 'I am a ruby method'
end

## inheritance in ruby
class WelcomingParty < Greeter
    def initialize ()
        ## The super method calls the constructor of the Parent class
        super
        puts 'this is your next step'
    end
end


 kip.welcome_guest