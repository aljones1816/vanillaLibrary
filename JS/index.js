let myLibrary = [
    {
        title: "Where the Red Fern Grows",
        author: "Wilson Rawls",
        pages: 245,
        status: false,
        id:0
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        pages: 635,
        status: false,
        id:1
    },
    {
        title: "The Fellowship of the Ring",
        author: "J. R. R. Tolkein",
        pages: 423,
        status: false,
        id:2
    },
    {
        title: "The Wizard of Oz",
        author: "L. Frank Baum",
        pages: 92,
        status: false,
        id:3
    },
    {
        title: "Charlie and the Chocolate Factory",
        author: "Roald Dahl",
        pages: 176,
        status: false,
        id:4
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        pages: 1225,
        status: false,
        id:5
    }
];
let id;

const setId = function () {
    const maxID = Math.max.apply(Math, myLibrary.map(function (o) { return o.id; }));
    if ( maxID > -1) {
        id = maxID + 1;
    } else {
        id = 0;
    }
}

setId();


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
    // show counts of books
    const totBooksP = document.getElementById('tot-books');
    const totBooks = library.length;
    totBooksP.innerText = "Number of books: " + totBooks;

    const readBooksP = document.getElementById('tot-read');
    const readBooks = (library.filter(function (e) {  // filter function
        return e.status;
    })).length;
    readBooksP.innerText = "Number of books read: " + readBooks;


    libraryContainer = document.getElementById('library');
    libraryContainer.innerHTML = "";
    library.forEach(Book => {
        const newDiv = document.createElement('div');
        newDiv.id = Book.id;
        newDiv.className = 'bookCard';

        const deleteButton = document.createElement('i');
        deleteButton.className = "delete-button fas fa-window-close";
        
        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();
            deleteBook(parseInt(newDiv.id));

        })

        newDiv.append(deleteButton);

        const updateButton = document.createElement('button');
        updateButton.textContent = 'update status'
        updateButton.className = 'update-button';
        updateButton.addEventListener('click', function (e) {
            e.preventDefault();
            changeStatus(parseInt(newDiv.id));
        })
        newDiv.append(updateButton);

        // add elements to book cards 
        const titlePara = document.createElement('h2');
        titlePara.className = 'book-title';
        const titleText = document.createTextNode(Book.title);
        titlePara.appendChild(titleText);
        newDiv.appendChild(titlePara);

        const authorPara = document.createElement('p');
        authorPara.className = 'book-author';
        const authorText = document.createTextNode("Written by " + Book.author);
        authorPara.appendChild(authorText);
        newDiv.appendChild(authorPara);

        const pagesPara = document.createElement('p');
        pagesPara.className = 'book-pages';
        const pagesText = document.createTextNode(Book.pages + " pages");
        pagesPara.appendChild(pagesText);
        newDiv.appendChild(pagesPara);



        // handle read status
        const readPara = document.createElement('p');
        readPara.className = 'readStatus'
        let readText;
        if (Book.status) {
            readText = document.createTextNode("Read")
        } else {
            readText = document.createTextNode("Not read")
        }
        
        readPara.appendChild(readText);
        newDiv.appendChild(readPara);

        
        

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
    const modalBack = document.getElementById('modal-back');
    modalBack.classList.add('open-background')
})

function closeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modal-one');
    modal.classList.remove('open');
    const modalBack = document.getElementById('modal-back');
    modalBack.classList.remove('open-background');
    resetForm();

}

function resetForm() {
    document.getElementById('bookForm').reset();
}

const modalSave = document.getElementById('saveBook');
const modalCancel = document.getElementById('cancelBook');

modalSave.addEventListener('click', function (event) {
    const newTitle = document.getElementById('bookTitle').value;
    const newAuthor = document.getElementById('bookAuthor').value;
    const newPages = document.getElementById('bookPages').value;
    const readStatus = document.getElementById('readStatus').checked;

    if (newTitle == "") {
        event.preventDefault();
        return;
    } else {
        const newBook = new Book(newTitle, newAuthor, newPages, readStatus, id);

        addBookToLibrary(newBook);

        displayBooks(myLibrary);
        closeModal(event);
        id++;
    }

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

const changeStatus = function (bookID) {
    const bookIndex = myLibrary.findIndex(book => book.id == bookID);
    const currentStatus = myLibrary[bookIndex].status ;
    myLibrary[bookIndex].status = !currentStatus;
    
    displayBooks(myLibrary);
}

const modalBack = document.getElementById('modal-back');
modalBack.addEventListener('click', function(e) {
  
    const modal = document.getElementById('modal-one')
    if (modal.contains(e.target)) {
        return;
    }
    
    closeModal(e);
})