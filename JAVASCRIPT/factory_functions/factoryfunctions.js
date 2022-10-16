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

// USING FACTORY FUNCTIONS
const team = (playerName, playerPosition, playerNationality) => {
    const sayHello = () => {
        console.log('Hello..')
    }
    return {playerName, playerPosition, playerNationality}
}
const Chelsea = team("Amando Broja", "striker", "Albania")
console.log(Chelsea)

// using the constructor pattern
const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
  };
  
  const jeff = new Person('jeff', 27);