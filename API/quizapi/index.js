console.log("hello multiverse")
fetch("https://opentdb.com/api.php?amount=10")
.then((response) => response.json())
.then((data) => console.log(data.results[0].category))