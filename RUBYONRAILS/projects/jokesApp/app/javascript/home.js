document.addEventListener('DOMContentLoaded', function ()
{
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke'
    const jokeContainer = document.querySelector('[data-joke-container]')

    fetch(apiUrl).then(response => response.json()).then (data => {
        jokeContainer.innerHTML = data.setup + ' '+ data.punchline 
    })
})