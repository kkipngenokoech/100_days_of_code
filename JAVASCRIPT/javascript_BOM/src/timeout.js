function timeout_message(){
    let username = prompt("hey enter your username:")
    if(confirm(`Hi, ${username}, do you want to visit my portfolio?`))
    {
        window.open("https://kipngenokoech.netlify.app/")
    }
    else
    {
        setTimeout(
            function () 
            {
                alert(`thank you for visiting, closing the website in three seconds`)
            },3000)
        window.close()
    }
}