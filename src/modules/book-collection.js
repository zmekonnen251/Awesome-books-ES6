export default class BookCollection {
  constructor(bookcontainer) {
    this.bookContainer = bookcontainer;
    this.bookContainer.addEventListener('click', this.removeBook);
    this.storedBooks = JSON.parse(localStorage.getItem('storedBook'));
    this.awsomeBooks = this.storedBooks || [];

    this.awsomeBooks.forEach((book) => {
      this.addBookToPage(book);
    });
  }

  addBookToPage = (book) => {
    const newBook = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const button = document.createElement('button');

    pTitle.classList.add('title');
    pAuthor.classList.add('author');
    button.classList.add('remove');

    pTitle.textContent = book.title;
    pAuthor.innerHTML = `<em>By: <em>${book.author}`;
    button.textContent = 'Remove';

    newBook.appendChild(pTitle);
    newBook.appendChild(pAuthor);
    newBook.appendChild(button);

    this.bookContainer.appendChild(newBook);
  };

  addNewBook(book) {
    this.awsomeBooks.push(book);
    localStorage.setItem('storedBook', JSON.stringify(this.awsomeBooks));
    this.addBookToPage(book);
  }

  removeBook = (event) => {
    if (event.target.classList.contains('remove')) {
      const bookToBeRemoved = this.awsomeBooks.find((book) => {
        if (book.title === event.target.parentElement.firstChild.textContent) {
          return true;
        }
        return false;
      });

      this.awsomeBooks.splice(this.awsomeBooks.indexOf(bookToBeRemoved), 1);
      localStorage.setItem('storedBook', JSON.stringify(this.awsomeBooks));

      this.bookContainer.innerHTML = '';
      this.awsomeBooks.forEach((book) => {
        this.addBookToPage(book);
      });
    }
  };
}
