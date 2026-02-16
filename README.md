📚 Library Project: Management System
A simple web application to manage a personal reading list. This project focuses on JavaScript objects, constructors, prototypes, and DOM manipulation using dataset and EventTarget principles.

🚀 Objectives
Implement Constructor Functions and Prototypes.

Manage a collection of objects using an internal Array.

Sync the Data Logic (JavaScript) with the UI Logic (DOM).

Handle user input via Forms and <dialog> modals.

🛠 Features to Implement
1. The Data Structure
All books will be stored in a central myLibrary array. Each book is an object created via a constructor.

Constructor: Defines properties like title, author, pages, readStatus, and a unique id.

Unique IDs: Use crypto.randomUUID() for each book to ensure stable identification when deleting or updating items.

Factory Function: A helper function addBookToLibrary() to handle the logic of creating the object and pushing it to the array.

2. The Display Logic
Create a function that renders the library to the page.

Separation of Concerns: Keep the "Data" (the array) and the "View" (the HTML cards) separate.

Dynamic Rendering: The function should clear the current display and re-render the list whenever the library changes.

3. User Interaction & Forms
New Book Button: Triggers a <dialog> or modal containing a form.

Form Submission: Use event.preventDefault() to stop the browser from trying to send data to a server, allowing JavaScript to handle the input locally.

4. Interactive Controls (The "Deep" Stuff)
Each book card in the UI must have:

Remove Button: Deletes the book from the array and the DOM.

Toggle Read Status: A button to switch between "Read" and "Not Read."

Implementation: This should be a function added to the Book.prototype so all instances can access it.

Data Attributes: Use data-id (the dataset property) on the HTML elements to link the visual "Card" to the specific JavaScript object in your array.