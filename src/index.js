// import neccessory modules
import './style.css';
import addBook from './modules/add-book.js';
import BookCollection from './modules/book-collection.js';
import navigation from './modules/navigation.js';
import liveDateTime from './modules/date-time.js';

// load liveDate function

liveDateTime();

// get book container and create instance of book with book container
const bookContainer = document.querySelector('.book-container');
const awesomeBooks = new BookCollection(bookContainer);

// add new book to book collection

addBook(awesomeBooks);

// navigation

navigation();
