def CaesarCipher(yourString, yourKey = 4)
    yourString = yourString.split("").to_a
    # print yourString - used for debbugging
    yourStringORD = []
    # iterate over the the string find its integral ordinal and then add your key
    for index in 0..yourString.length - 1
        yourStringORD[index] = yourString[index].ord + yourKey
    end
   # print yourStringORD -used for debbugging
   encrypted = ""

end

CaesarCipher("kip")