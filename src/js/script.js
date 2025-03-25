const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");




let bookListArray = JSON.parse(
    localStorage.getItem("bookListArray") || "[]"
);

const addBook = (book) => {
    
};


addBookButton.addEventListener("click", () => {
  const valueBookName = bookName.value;
  const valueAuthorName = bookAuthor.value;

  let book = {
    name: valueBookName,
    author: valueAuthorName,
  };

  bookListArray.push(book);

  bookName.value = "";
  bookAuthor.value = "";
});


