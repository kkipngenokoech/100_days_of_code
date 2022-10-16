#!usr/bin/ruby
def stockPicker(stocks)
    market = []
    lowestStock = stocks.min
    highestStock = stocks.max
    # puts "#{lowestStock}, #{highestStock}" used for debugging
    indexLow =  stocks.find_index(lowestStock)
    indexHigh = stocks.find_index(highestStock)
    market[0] = indexLow
    market[1] = indexHigh
    return market
end

stocks = [12,54,65,23,45,9,34,56,34]
print stockPicker(stocks)