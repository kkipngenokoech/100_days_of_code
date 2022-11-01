function SuperDeveloper(){
    this.language = 'ruby'
}

let kipDeveloper = new SuperDeveloper()
console.log(kipDeveloper)

let kipEngineer = new SuperDeveloper()
console.log(kipEngineer)

function TopDeveloper(name, language){
    this.name = name
    this.language = language
}

let kipProgrammer = new TopDeveloper('kip', 'ruby on rails')
console.log(kipProgrammer)
console.log(`hey there ${kipProgrammer.name}, you love ${kipProgrammer.language} and that's super super awesome`)


function Sandwich(bread, meat, vegetables){
    this.bread = bread
    this.meat = meat
    this.vegetables = vegetables
}

let sandwichBread = new Sandwich("superLoaf",["sliced meat","cheese","turkey","chicken Breast"],["tomatoes","onions","Avocado"])
console.log(sandwichBread)
console.log(sandwichBread instanceof SuperDeveloper)