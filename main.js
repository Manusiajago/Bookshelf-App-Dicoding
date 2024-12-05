// Do your work here...
// console.log('Hello, world!');

document.addEventListener('DOMContentLoaded', function () {
    const inputBookTitle = document.getElementById('bookFormTitle');
    const inputBookAuthor = document.getElementById('bookFormAuthor');
    const inputBookYear = document.getElementById('bookFormYear');
    const inputBookIsComplete = document.getElementById('bookFormIsComplete');
    const bookSubmit = document.getElementById('bookFormSubmit');
    const incompleteBookshelfList = document.getElementById('incompleteBookList');
});
const completeBookshelfList = document.getElementById('completeBookList');
const searchBookForm = document.getElementById('searchBook')

let books = JSON.parse(localStorage.getItem('books')) || [];

bookSubmit.addEventListener('click', ((e) => {
    e.preventDefault();
    addBook();
}));
searchBookForm.addEventListener('submit', ((e) => {
    e.preventDefault();
    searchBook();
}))


function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function addBook() {
    const title = inputBookTitle.value;
    const author = inputBookAuthor.value;
    const year = parseInt(inputBookYear.value);
    const isComplete = inputBookIsComplete.checked;

    if (title === "" || author === "" || isNaN(year)) {
        alert('Anda harus melengkapi semua data buku !');
        return;
    }

}


