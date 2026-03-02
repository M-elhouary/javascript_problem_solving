
// Book Library App
const BookLibrary = [];


// Book class
class Book {
    constructor(title, author, pages, read_status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read_status = read_status;
        this.id = crypto.randomUUID();
    };

    // Function to toggle the read status of a book
    toggleButton(id) {

    for (const book of BookLibrary) {
        if (book.id == id) {
            book.read_status = !book.read_status;
            break;
        }
    }
    renderLibrary();
};
}


// Function to add a book to the library
function addBookToLibrary(title, author, pages, read_status) {
    const NewBook = new Book(title, author, pages, read_status);
    BookLibrary.push(NewBook);
}

// Adding some books to the library
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);




// Function to remove a book from the library
function RemoveBook(id) {
    for (const book of BookLibrary) {
        const index = BookLibrary.findIndex((book) => book.id === id);
        if (index != -1) {
            BookLibrary.splice(index, 1);
            break;
        }
    }
    renderLibrary();
}


// Function to render the library on the webpage
function renderLibrary() {

    const libDiv = document.getElementById("library");
    libDiv.innerHTML = "";

    for (const book of BookLibrary) {

        const bookCardDiv = document.createElement("div");

        // Adding title to the book card
        const bookCardTitle = document.createElement("h3");
        bookCardTitle.textContent = `Title : ${book.title}`;
        bookCardDiv.appendChild(bookCardTitle);

        // Adding author to the book card
        const bookCardAuthor = document.createElement("p");
        bookCardAuthor.textContent = `author : ${book.author}`;
        bookCardDiv.appendChild(bookCardAuthor);


        // Adding pages to the book card
        const bookCardPages = document.createElement("p");
        bookCardPages.textContent = `Pages : ${book.pages}`;
        bookCardDiv.appendChild(bookCardPages);

        // Adding read status to the book card
        const bookCardReadStatus = document.createElement("p");
        if (book.read_status == true) {
            bookCardReadStatus.textContent = `Read Status : Read`;
        } else {
            bookCardReadStatus.textContent = `Read Status : Not Read`;
        }
        bookCardDiv.appendChild(bookCardReadStatus);


        // Adding a button to toggle read status
        const Button = document.createElement("button");    
        Button.textContent = "Toggle Read Status";
        Button.dataset.id = book.id;
        Button.addEventListener("click", () => book.toggleButton(book.id));
        bookCardDiv.appendChild(Button);



        // remove button 
        const RemoveButton = document.createElement("button");
        RemoveButton.textContent = "Remove Book";
        RemoveButton.dataset.id = book.id;
        RemoveButton.addEventListener("click", () => RemoveBook(book.id));
        bookCardDiv.appendChild(RemoveButton);

        libDiv.appendChild(bookCardDiv);
    }
};


function displayNewBookBtn() {
    const form = document.getElementById("BookForm");
    form.style.display = "block";
}
function addBookForm() {
    const newButton = document.getElementById("newBookBtn");
    newButton.addEventListener("click", () => displayNewBookBtn());
}



function preventFormSubmit() {
    const form = document.getElementById("BookForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getFormData();
        renderLibrary();
        // form.style.display = "none";
        form.reset();
    })
}


function getFormData() {

    var input_title = document.querySelector('input[name = "title"]');
    let title = input_title.value;
    
    var input_author = document.querySelector('input[name = "author"]');
    let author = input_author.value;
    
    var input_pages = document.querySelector('input[name = "pages"]');
    let pages = parseInt(input_pages.value);
    
    var input_read_status = document.querySelector('input[name = "read"]');
    let read_status = input_read_status.checked;

    addBookToLibrary(title, author, pages, read_status);

}



// Initial render of the library    
renderLibrary();
addBookForm();
preventFormSubmit();
