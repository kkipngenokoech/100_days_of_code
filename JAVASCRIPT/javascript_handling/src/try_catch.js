    try 
    {
        //var first_array = ["34","36","45","67"]
        var first_array = document.getElementsByTagName('p')
        document.write(first_array)
        document.write(second_array)
    }
    catch (error)
    {
        alert(`error: ${error.message}`)
    }