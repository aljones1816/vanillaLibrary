let id = 0;

let myLibrary = [

];

function Book(title, author, pages, status, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.sayInfo = function () {
    return (
        this.title + " by " + this.author + ", " + this.pages + ", " + this.status
    )
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function displayBooks(library) {
    libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML = "";
    library.forEach(Book => {
        const newDiv = document.createElement('div');
        newDiv.id = Book.id;
        newDiv.className = 'bookCard';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete book'
        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();
            deleteBook(parseInt(newDiv.id));
            
        })
        

        for (x in arr = [Book.title, Book.author, Book.pages]) {
            const labelStrings = ['Title', 'Author', 'Pages']
            const paragraph = document.createElement('p');
            paragraph.className = labelStrings[x];
            const paragraphText = document.createTextNode(labelStrings[x] + ': ' + arr[x]);
            paragraph.appendChild(paragraphText);
            newDiv.appendChild(paragraph);
        }
            newDiv.append(deleteButton);

        libraryContainer.appendChild(newDiv);
    }

    )
}

displayBooks(myLibrary);

const modalButton = document.getElementById('openModal');

modalButton.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById('modal-one');
    modal.classList.add('open');
})

function closeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modal-one');
    modal.classList.remove('open');
}

const modalSave = document.getElementById('saveBook');
const modalCancel = document.getElementById('cancelBook');

modalSave.addEventListener('click', function (event) {

    const newTitle = document.getElementById('bookTitle').value;
    const newAuthor = document.getElementById('bookAuthor').value;
    const newPages = document.getElementById('bookPages').value;

    const newBook = new Book(newTitle, newAuthor, newPages, false, id);

    addBookToLibrary(newBook);

    displayBooks(myLibrary);
    closeModal(event);
    id++;
})

modalCancel.addEventListener('click', function (event) {
    closeModal(event);
})

const deleteBook = function (bookID) {
    const bookIndex = myLibrary.map(e => e.id).indexOf(bookID);
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
        displayBooks(myLibrary);
    }
    else {
        return
    }
}
