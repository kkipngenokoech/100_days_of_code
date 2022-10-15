#!usr/bin/ruby

def sub_string(string, dictionary)
    for index in 0..string.length - 1
        if (dictionary.include? string[0..index])
            puts "yes = #{string[0..index]}"
        end
    end

end

# test data
 dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
 sub_string("below", dictionary)