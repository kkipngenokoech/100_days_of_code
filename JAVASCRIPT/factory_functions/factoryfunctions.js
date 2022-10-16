// using constructor
function player(name, age, team) {
    this.name = name
    this.age = age
    this.team = team    
    this.displayDetails = function (){
        console.log (`#{this.name}`)
    }
}
let cp10 = new player("Christian pulisic", 23, "Chelsea")
console.log(cp10.displayDetails)
// console.log(cp10.age) - used for debugging