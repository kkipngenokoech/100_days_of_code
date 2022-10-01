const form_validate = () => {
    let user_name = document.validate_form.username.value
    let user_password = document.getElementById('user_password').value
    let reenter_password = document.getElementById('reenter_password').value
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