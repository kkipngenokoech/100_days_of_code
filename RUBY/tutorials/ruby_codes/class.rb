#!/usr/bin/ruby

# class blueprint
class Multiverse 
    # class variables.
    @@multiverse_location = 'space'
    # this allows us to pass parameters or arguments into our class instances
    def initialize(id, name, reason_for_visit)
        # instance variables
        @agent_id = id
        @agent_name = name
        @agent_RFV = reason_for_visit
    end
    def display_details 
        puts "#{@agent_id}"
        puts "#{@agent_name}"
        print "Hello ".concat("#{@agent_name}\n")
        print "#{@agent_id}" << " welcome to multiverse, you visiting as " << "#{@agent_RFV}\n"
    end
end

# object instances with parameters
player_one = Multiverse.new('001', 'Africa_story_teller', 'agent from africa, a rep')
player_two = Multiverse.new('002', 'Europe defender', 'Europe ambassador to space')

#puts "#{player_one.agent_id}"
player_one.display_details