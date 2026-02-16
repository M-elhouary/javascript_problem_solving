

const BookLibrary = [];

class Book {
    constructor(title, author, pages, read_status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read_status = read_status;
        this.id = crypto.randomUUID();
    };
}

function addBookToLibrary(title, author, pages, read_status) {

    const NewBook = new Book(title, author, pages, read_status);
    BookLibrary.push(NewBook);

}


addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Not Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Not Read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, "Read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, "Not Read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, "Not Read");



function renderLibrary() 
{

    const libDiv = document.getElementById("library");
    libDiv.innerHTML = "";
    for (const book of BookLibrary) {
        const bookInfo = document.createElement("div");
        bookInfo.innerHTML =
            `title : ${book.title} 
            author : ${book.author} 
            pages : ${book.pages}
            read status : ${book.read_status}`;
        libDiv.appendChild(bookInfo);
}};

