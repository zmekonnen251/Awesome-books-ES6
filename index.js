import addBook from "./modules/add-book.js";
import BookCollection from "./modules/book-collection.js";
import navigation from "./modules/navigation.js";
// import { DateTime } from "./node_modules/luxon/src/luxon.js";
import liveDateTime from "./modules/date-time.js";

liveDateTime;

const bookContainer = document.querySelector(".book-container");

const awesomeBooks = new BookCollection(bookContainer);

// add new book to book collection
addBook(awesomeBooks);

// navigation
navigation;
