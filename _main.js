let myLibrary = [
    {
        id: 1,
        title: 'shart',
        author: 'fart',
        pages: 12,
        status: 'read' 
    }
];

function Book(title,author,pages,status) {
  this.id;
  this.title=title;
  this.author= author;
  this.pages=pages;
  this.status=status;
}

Book.prototype.sayInfo = function() {
    return (
        this.title + " by " + this.author + ", " + this.pages + ", " + this.status
    )
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const testBook = new Book('hot','tot','12','read');

addBookToLibrary(testBook);

function displayBooks(library) {
    library.forEach(Book => {
            const newDiv = document.createElement('div');
            newDiv.id = Book.id;

            for (x in arr = [Book.title, Book.author, Book.pages]) {
                const paragraph = document.createElement('p');
                const paragraphText = document.createTextNode(arr[x]);
                paragraph.appendChild(paragraphText);
                newDiv.appendChild(paragraph);
            }
            
            document.body.appendChild(newDiv);
    }
    
    )
}

displayBooks(myLibrary);
