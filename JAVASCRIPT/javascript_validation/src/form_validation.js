const form_validate = () => {
    let user_name = document.validate_form.username.value
    let user_password = document.getElementByName('user_password').value
    if (user_name == null || user_name == "")
    {
        alert(`username cannot be blank`)
        return false
    }
    else if (user_password.length < 6)
    {
        alert(`password must be at least 6 characters long`)
        return false
    }
    else
    {
        alert(`success`)
    }
}