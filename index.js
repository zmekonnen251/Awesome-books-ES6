import addBook from './modules/add-book.js';
import BookCollection from './modules/book-collection.js';
import navigation from './modules/navigation.js';

const bookContainer = document.querySelector('.book-container');

const awesomeBooks = new BookCollection(bookContainer);

// add new book to book collection
addBook(awesomeBooks);

// navigation
navigation();
