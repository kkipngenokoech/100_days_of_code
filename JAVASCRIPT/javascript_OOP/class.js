class Class {
    constructor (name, year)
    {
        this.name = name
        this.year = year
    }
    getDetails()
    {
        return `${this.name}, ${this.year}`
    }
    age(currentYear)
    {
        return currentYear - this.year
    }
}

let Odin = new Class("JS", 2020)
let Udacity = new Class("SQL", 2022)
console.log(Odin.name)

console.log (Odin.getDetails())

console.log(Odin.age(2022))