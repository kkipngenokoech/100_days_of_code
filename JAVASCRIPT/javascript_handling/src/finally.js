try 
{
    var index = 2
    if (index == 2)
    {
        document.write(`ok`)
    }
}
catch (error)
{
    document.write(`error: ${error.message}`)
}
finally
{
    document.write(`value of index should be 2`)
}