const isbn = document.getElementById('iIsbn');
const title = document.getElementById('iTitle');
const author = document.getElementById('iAuthor');
const year = document.getElementById('iYear');
const primary = document.getElementById('primary');
const div = document.getElementById('div');


// DataBase
const library = [];

// functions
const createOl = () => document.createElement('ol');
const createLi = () => document.createElement('li');
const createTextNode = (text) => document.createTextNode(text);
const appentChildToElement = (parent, child) => parent.appendChild(child);

function createOlItem() {
    const elemOl = createOl();
    const elemLi = createLi();
    const isbnText = createTextNode(isbn.value);
    const titleText = createTextNode(title.value);
    const authorText = createTextNode(author.value);
    const yearText = createTextNode(year.value);
    appentChildToElement(elemLi, isbnText);
    appentChildToElement(elemLi, titleText);
    appentChildToElement(elemLi, authorText);
    appentChildToElement(elemLi, yearText);
    appentChildToElement(elemOl, elemLi);
    appentChildToElement(div, elemOl);
    console.log(isbnText);
}

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

function printArray() {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}
// primary.onclick = pushBookToLibrary;
primary.onclick = () => { createOlItem(); pushBookToLibrary(); }


