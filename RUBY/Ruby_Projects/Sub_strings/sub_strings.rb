#!usr/bin/ruby

def sub_string(string, dictionary)
    ## empty hash
    appearance = {}
    dictionary.each do |element|
        if (string.include? element)
            if (appearance.has_key?(element))
                appearance[element] += 1
            else
                appearance[element] = 1
            end
        end
    end
    puts appearance

end

# test data
 dictionary = ["below","below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
 sub_string("below", dictionary)