function MoneyHeist(actor){
    this.actor = actor
    this.sayActor = function (){
        console.log(`hey ${actor}, I like you super super much`)//using this.actor also works.
    }
}

let professor = new MoneyHeist('professor')
professor.sayActor()
let Berlin = new MoneyHeist('Berlin')
Berlin.sayActor()


const Building = {
    floors: 5,
    addFloor: function(){
        this.floors += 1
    }
}

console.log(Building.floors)
console.log(Building.addFloor())
console.log(Building.floors)
console.log(Building.addFloor())

function myFunction(){
    console.log("This keyword belongs to global-window in this particular function")
}

myFunction()