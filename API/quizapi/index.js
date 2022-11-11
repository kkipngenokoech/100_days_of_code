console.log("hello multiverse")
fetch("https://opentdb.com/api.php?amount=10")
.then((response) => response.json())
.then((data) => 
{
    console.log(data)
    console.log(data.response_code)
    console.log(data.results.length)
    console.log(data.results[0].category)
    console.log(data.results[0].question)
})