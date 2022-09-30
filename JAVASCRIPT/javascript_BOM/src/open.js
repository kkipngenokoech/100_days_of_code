function open_window(){
    let username = prompt("hello, whats your name?")
    if(confirm(`Hello ${username},do you want to visit my portfolio?`))
    {
        window.open("https://kipngenokoech.netlify.app/")
    }
    else
    {
        alert("thank you for visiting me!")
    }
}