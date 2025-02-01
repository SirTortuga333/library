const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + (read ? "read." : "not read yet.");
    }
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

function showBooks(){
    const tableBody = document.querySelector('tbody');
    
    const oldRows = tableBody.querySelectorAll('tr');

    oldRows.forEach(element => {
        tableBody.removeChild(element);
    });

    myLibrary.forEach(element => {

        const tableRow = document.createElement('tr');
        const tableTitle = document.createElement('th');
        tableTitle.setAttribute('scope', 'row');
        tableTitle.textContent = element.title;

        const tableAuthor = document.createElement('td');
        tableAuthor.textContent = element.author;

        const tablePages = document.createElement('td');
        tablePages.textContent = element.pages;

        const tableRead = document.createElement('td');
        tableRead.textContent = element.read ? 'Yes' : 'No'

        const tableAction = document.createElement('td');
        const tableButton = document.createElement('button');
        tableButton.textContent = 'Delete';
        tableRow.addEventListener('click', deleteBook);


        tableRow.appendChild(tableTitle);
        tableRow.appendChild(tableAuthor);
        tableRow.appendChild(tablePages);
        tableRow.appendChild(tableRead);
        
        tableAction.appendChild(tableButton);
        tableRow.appendChild(tableAction);

        tableBody.appendChild(tableRow);


    });

}

function deleteBook(e){
    /* Borramos del Array y reimprimimos la tabla */

    const titleData = e.currentTarget.querySelector('th');

    myLibrary.splice(myLibrary.findIndex((element) => titleData.textContent === element.title) ,1)

    showBooks();
}

function newBook(event){

    const formData = document.querySelectorAll('input');

    addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, formData[3].value);

    formData.forEach(element => {
        element.value = ''        
    });

    event.preventDefault();
}

const btnShowBooks = document.querySelector('.showBooks');
btnShowBooks.addEventListener('click', showBooks);


const btnSubmitForm = document.querySelector('.submitForm');
btnSubmitForm.addEventListener('click', newBook);



/* Add starting books */
addBookToLibrary('Dune', 'Frank Herbert', 412, 0);
addBookToLibrary('El Mesias de Dune', 'Frank Herbert', 304, 0);
addBookToLibrary('Hijos de Dune', 'Frank Herbert', 544, 0);
addBookToLibrary('Dios emperador de Dune', 'Frank Herbert', 568, 0);
addBookToLibrary('Herejes de Dune', 'Frank Herbert', 568, 0);
addBookToLibrary('Casa capitular Dune', 'Frank Herbert', 640, 0);