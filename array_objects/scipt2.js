// objects
const book = {
    isbn: 12343254,
    title: 'War and Peace',
    author: 'Lev Tolstoi',
    year: 1869
}
console.log(book.isbn);
// или
console.log(book['isbn']);

// for (let key in book) {
//     console.log(book[key]);
// }

function printObj(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}
printObj(book);

// ------------------- constructor ------------------
function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book(1, 'Star Wars', 'Lucas', 1978);
console.log(book1);

const book2 = new Book(2, 'Harry Potter', 'Rowling', 1997);
console.log(book2);
// ---------------------------------------------------

const books = [book, book1, book2];
function booksMarket() {
    console.log('````````` Books Market ````````');
    for (let key in books) {
        console.log(books[key]);

    }
}
booksMarket();

function addToArchive(isbn, title, author, year) {
    const tmp = new Book(isbn, title, author, year);
    books.push(tmp);
}
addToArchive(3, 'Sherlock Holmes', 'Arthur', 1887);
booksMarket(); 
