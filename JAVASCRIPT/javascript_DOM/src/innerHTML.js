const comment_generator_field = () => {
    let create_data = "Name: <input type = 'text' name = 'name'> <br> <textarea rows = '5' cols = '80'></textarea> <br> <input type = 'submit' value = 'post comment'"
    document.getElementById('myLocation').innerHTML = create_data
}