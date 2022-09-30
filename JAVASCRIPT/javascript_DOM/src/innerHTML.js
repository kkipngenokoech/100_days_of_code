let flag = true
const comment_generator_field = () => {
   // let create_data = "Name: <input type = 'text' name = 'name'> <br> <textarea rows = '5' cols = '80'></textarea> <br> <input type = 'submit' value = 'post comment'"
   let form_data = "<form action = 'comment'>Enter Name: <br><input type = 'text' name = 'name'/></br>Enter Email:<br><input type = 'email' name = 'email'></input></br><br>Enter comment:</br><textarea rows = '5' cols = '70'></textarea><br><input type = 'submit' value = 'post comment'></form>"
   if (flag)
   {
    document.getElementById('myLocation').innerHTML = form_data
    flag = false
   }
   else
   {
    document.getElementById('myLocation').innerHTML = ""
    flag = true
   }
}