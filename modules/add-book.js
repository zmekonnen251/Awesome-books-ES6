const addBtn = document.forms[0].add;
const titleField = document.forms[0].title;
const authorField = document.forms[0].author;

const addBook = (bookCollection) => {
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = {
      title: titleField.value,
      author: authorField.value,
    };

    bookCollection.addNewBook(newBook);

    titleField.value = "";
    authorField.value = "";
  });
};

export default addBook;
