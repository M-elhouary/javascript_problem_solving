# 📚 Book Library

A simple vanilla JavaScript web app to manage a personal book library. Add, remove, and track the read status of your books — all from the browser.

## Features

- **View books** — Displays all books as cards with title, author, page count, and read status.
- **Add a book** — Fill in a form to add a new book to the library.
- **Toggle read status** — Mark a book as read or not read with a single click.
- **Remove a book** — Delete a book from the library.

## Project Structure

```
book_library/
├── index.html   # Main HTML page
├── lib.js       # Application logic (Book class, rendering, form handling)
├── style.css    # Styles
└── README.md    # This file
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mel-houa/my_project.git
   ```
2. Open `book_library/index.html` in your browser — no build tools or dependencies required.

## How It Works

- **`Book` class** — Each book is an object with a `title`, `author`, `pages`, `read_status`, and a unique `id` (generated via `crypto.randomUUID()`).
- **`BookLibrary` array** — Stores all book instances in memory.
- **`renderLibrary()`** — Clears the page and re-renders every book card from the array.
- **Form handling** — The "Add new book" button reveals a form. On submit, the form data is read, a new book is created and added to the library, and the page re-renders.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
