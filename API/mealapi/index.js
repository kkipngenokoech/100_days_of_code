const mealBtn = document.getElementById('get_meal')
const mealContainer = document.getElementById('meal')


const createMeal = (meal) => {
    const ingredients = []
    for (let index = 1; index < 20; index++) {
        if (meal[`strMeasure${index}`]){
            ingredients.push(`${meal[`strMeasure${index}`]}- ${meal[`strMeasure${index}`]}`)
        }
        else {
            break;
        }
    }
}
mealBtn.addEventListener('click',()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    })
})