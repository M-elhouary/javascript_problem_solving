
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
}


// Function to add a book to the library
function addBookToLibrary(title, author, pages, read_status) 
{
    const NewBook = new Book(title, author, pages, read_status);
    BookLibrary.push(NewBook);
}

// Adding some books to the library
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);





function toggleButton(id)
{

    for (const book of BookLibrary) {
        if(book.id == id){
            book.read_status = !book.read_status;
        }
    } 
    renderLibrary();
};


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
        if(book.read_status == true){
            bookCardReadStatus.textContent = `Read Status : Read`;
        } else {
            bookCardReadStatus.textContent = `Read Status : Not Read`;
        }
        bookCardDiv.appendChild(bookCardReadStatus);


        // Adding a button to toggle read status
        const Button = document.createElement("button");
        Button.textContent = "Toggle Read Status";
        Button.dataset.id = book.id;
        Button.addEventListener("click", () => toggleButton(Button.dataset.id));
        bookCardDiv.appendChild(Button);
        

        libDiv.appendChild(bookCardDiv);
    }
    
};  

// Initial render of the library    
renderLibrary();

// Add event listener to the button to toggle read status


