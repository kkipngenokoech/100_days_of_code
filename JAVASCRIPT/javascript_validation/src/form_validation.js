const form_validate = () => {
    let user_name = document.validate_form.username.value
    let age_validate = document.getElementById('age').value
    let email_validate = document.getElementById('user_email').value
    let at_position = email_validate.indexOf('@')
    let dot_position = email_validate.lastIndexOf('.')
    let user_password = document.getElementById('user_password').value
    let reenter_password = document.getElementById('reenter_password').value
    if (user_name == null || user_name == "")
    {
        alert(`username cannot be blank`)
        return false
    }
    else if (isNaN(age_validate))
    {
        document.getElementById('numloc').innerText = 'enter numeric value only'
        return false
    }
    else if(at_position < 1 || dot_position < at_position + 2 || dot_position + 2 >= email_validate.length)
    {
        alert(`please enter a valid email address: @ at ${at_position} and a dot at ${dot_position}`)
        return false
    }
    else if (user_password.length < 6)
    {
        alert(`password must be at least 6 characters long`)
        return false
    }
    else if (user_password != reenter_password)
    {
        alert(`passwords must be the same`)
        return false
    }
    else
    {
        alert(`success`)
    }
}