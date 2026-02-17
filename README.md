# 📚 Book Library — JavaScript Project

> A simple web application to manage a personal reading list, built with **vanilla JavaScript**, focusing on OOP concepts, DOM manipulation, and clean data/UI separation.

---

## 📖 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Concepts Covered](#concepts-covered)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)

---

## About

This project is a hands-on exercise in core JavaScript fundamentals. The main application (`book_library/`) lets users view, add, and manage a collection of books — all handled client-side with no frameworks or back-end.

A secondary folder (`Object_JS/`) contains early experiments with constructor functions and prototypes that informed the final design.

---

## Demo

Open `book_library/index.html` in any modern browser to see the app in action.

| Feature | Preview |
|---|---|
| Book cards rendered dynamically | Each card shows **title, author, pages,** and **read status** |
| Toggle read status | One-click button flips between *Read* / *Not Read* |

---

## Project Structure

```
JS/
├── README.md
├── book_library/          # ← Main application
│   ├── index.html         # Entry point
│   ├── lib.js             # App logic (Book class, render, toggle)
│   └── style.css          # Styles (WIP)
└── Object_JS/             # ← OOP sandbox / experiments
    ├── index.html
    ├── Book.js            # Constructor & prototype exploration
    └── style.css
```

---

## Features

### ✅ Implemented

| # | Feature | Details |
|---|---------|---------|
| 1 | **Book class** | ES6 `class` with `title`, `author`, `pages`, `read_status`, and a unique `id` via `crypto.randomUUID()` |
| 2 | **Central library array** | All books stored in a single `BookLibrary[]` array |
| 3 | **Factory function** | `addBookToLibrary()` creates a `Book` instance and pushes it to the array |
| 4 | **Dynamic rendering** | `renderLibrary()` clears and re-builds the DOM from the array on every change |
| 5 | **Toggle read status** | Button on each card flips `read_status` using `data-id` to link DOM ↔ data |
| 6 | **Sample data** | 5 pre-loaded classic books for instant demo |

### 🔲 To Do

- [ ] **"New Book" form** — `<dialog>` modal with form inputs & `event.preventDefault()`
- [ ] **Remove book** — Delete button on each card (remove from array + DOM)
- [ ] **Persistent storage** — Save library to `localStorage`
- [ ] **Styling** — Design book cards with CSS Grid / Flexbox
- [ ] **Input validation** — Prevent empty or duplicate entries

---

## Concepts Covered

| Concept | Where it's used |
|---------|-----------------|
| **ES6 Classes** | `Book` class in `lib.js` |
| **Constructor Functions & Prototypes** | Explored in `Object_JS/Book.js` |
| **`crypto.randomUUID()`** | Unique ID generation for each book |
| **DOM Manipulation** | `createElement`, `textContent`, `appendChild` in `renderLibrary()` |
| **`dataset` / `data-*` attributes** | Linking each card's toggle button to its book object |
| **Event Listeners** | `click` events on dynamically created buttons |
| **Data ↔ UI Separation** | Array holds truth; DOM is rebuilt from array |

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/mel-houa/my_project.git
   cd my_project/JS
   ```

2. **Open the app**
   ```bash
   # Any of these will work:
   open book_library/index.html        # macOS
   xdg-open book_library/index.html    # Linux
   start book_library/index.html       # Windows
   ```
   Or simply drag `book_library/index.html` into your browser.

3. **No build step required** — it's pure HTML, CSS, and JavaScript.

---

## Roadmap

```
Phase 1  ✅  Core data model + rendering
Phase 2  🔲  Add / Remove books via UI
Phase 3  🔲  localStorage persistence
Phase 4  🔲  Polish UI & responsive design
```

---

<p align="center">
  Made with ☕ and vanilla JS
</p>