def CaesarCipher(yourString, yourKey = 4)
    yourString = yourString.split("").to_a
    # print yourString - used for debbugging
    yourStringORD = []
    # iterate over the the string find its integral ordinal and then add your key
    # for index in 0..yourString.length - 1
    #     yourStringORD[index] = yourString[index].ord
    # end
   # print yourStringORD -used for debbugging
   encrypted = ""
   smallAlpha = ('a'..'z').to_a
   capitalAlpha = ('A'..'Z').to_a
   lastOrdSmall = smallAlpha[-1].ord
   firstOrdSmall = smallAlpha[0].ord
  # print firstOrdSmall - used for debugging
   # print capitalAlpha - used for debugging

   for index in 0..yourString.length - 1
        if yourString[index] in smallAlpha
            yourStringORD[index] = yourString[index].ord + yourKey
            # puts yourStringORD[index]
           # puts smallAlpha[-1]
            if yourStringORD[index] > lastOrdSmall
               # puts yourStringORD[index]
                yourStringORD[index] -= (lastOrdSmall - firstOrdSmall)
                puts yourStringORD[index]
            end

        elsif yourString[index] in capitalAlpha
            print "No"
        end
    end
end

CaesarCipher("kipz")