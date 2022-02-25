const bookList = document.querySelector('.book-list');
const addBook = document.querySelector('.add-book');
const contact = document.querySelector('.contact');

const nav = document.querySelector('.navigation');

const navigation = () => {
  nav.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('list-link')) {
      bookList.classList.remove('dn');
      contact.classList.add('dn');
      addBook.classList.add('dn');
    } else if (event.target.classList.contains('add-link')) {
      addBook.classList.remove('dn');
      contact.classList.add('dn');
      bookList.classList.add('dn');
    } else if (event.target.classList.contains('contact-link')) {
      contact.classList.remove('dn');
      addBook.classList.add('dn');
      bookList.classList.add('dn');
    }
  });
};

export default navigation;
