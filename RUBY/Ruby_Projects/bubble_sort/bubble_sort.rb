#!usr/bin/ruby

def bubbleSort (sortArray)
    for index in 0..sortArray.length - 1
        # puts sortArray[index]
        # puts sortArray[index + 1] - used for debugging
        if index == sortArray.length - 1
            break
        end
        if sortArray[index] > sortArray[index + 1]
            temp = sortArray[index]
            sortArray[index] = sortArray[index + 1]
            sortArray[index + 1] = temp
        end
    end
    while sortArray.sort != sortArray
        bubbleSort(sortArray)
    end
    return sortArray
end
sortthisarray = [12,1,23,45,67,34,56,12,11,90,2]
print bubbleSort(sortthisarray)
