const isbn = document.getElementById('iIsbn');
const title = document.getElementById('iTitle');
const author = document.getElementById('iAuthor');
const year = document.getElementById('iYear');
const primary = document.getElementById('primary');

// DataBase
const library = [];

// functions
function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;

    this.getBookYear = function () {
        const date = new Date();
        return date.getFullYear - this.year;
    }
}

function pushBookToLibrary() {
    console.log('ok');
    const iIsbn = isbn.value;
    const ITitle = title.value;
    const iAuthor = author.value;
    const iYear = year.value;
    const newBook = new Book(iIsbn, ITitle, iAuthor, iYear);
    library.push(newBook);
    alert('Book added');
    isbn.value = '';
    title.value = '';
    author.value = '';
    year.value = '';
    printArray();
}
function createDisplayAddedBooks() {

}
function printArray() {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}
primary.onclick = pushBookToLibrary;


