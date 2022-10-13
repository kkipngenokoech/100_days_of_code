Books = (title, author, pages) => {
    this.title = title
    this.author = author
    this.pages = pages
    return `${title}, ${this.author}, ${this.pages}`
}

Books("Things Fall Apart","Chinua Achebe", 209)

class BookStore {
    constructor (name, author, pages)
    {
        this.name = name
        this.author = author
        this.pages = pages
    }
    print_details () {
        return `${this.name}, ${this.author}, ${this.pages}`
    }
}

let FirstBook = new BookStore("Atomic Habits", "James Clear", 260)
FirstBook.print_details()