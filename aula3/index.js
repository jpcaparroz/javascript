let book = {
    name: 'Hobbit',
    author: 'J. R. R. Tolkien',
    pages: 675,

    chapters: {
        chapter1: {
            name: 'The trip',
            pages: 234
        },
        chapter2: {
            name: 'The ring',
            pages: 441
        }        
    },

    printBook: function() {
        console.log('Printing ' + book.name + '...')
        console.log('Total pages: ' + book.pages)
    }
}

book.printBook()


// Factory
function createBook(bookName, bookAuthor, bookPages) {

    const book = {
        name: bookName,
        author: bookAuthor,
        pages: bookPages,
    
        printBook: function() {
            console.log('Printing ' + book.name + '...')
            console.log('Total pages: ' + book.pages)
        }
    }

    return book
}

const book1 = createBook('Pink', 'Barbie', 567)
console.log(book1)


const book2 = createBook('Test', 'Mark', 263)
book2.color = 'black'
console.log(book2)


// Constructor
function BookConstructor(bookName, bookAuthor, bookPages) {

    this.name = bookName;
    this.author = bookAuthor;
    this.pages = bookPages
     
}

const book3 = new BookConstructor('Margaridas', 'Florentino', 987)
console.log(book3)

// Template literals
let firstName = 'Joao'

let message = `Hi, my name is ${firstName}
And yours?`

console.log(message)