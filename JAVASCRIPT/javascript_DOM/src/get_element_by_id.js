const get_element_by_id = () => {
    let cube_number = document.getElementById('cube_me').value
    //alert(`${cube_number}`)
    let cubed_number = cube_number * cube_number * cube_number
    alert(`${cubed_number}`)
    return `the cube of ${cube_number} is : ${cubed_number}`
}