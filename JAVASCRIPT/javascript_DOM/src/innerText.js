const inner_Text = () => {
    let message
    if(document.inner_text.userPass.value.length > 5)
    {
        message = 'your password is good'
    }
    else
    {
        message = 'your password is fair'
    }
    document.getElementById('my_location').innerText = message
}