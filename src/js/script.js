const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");

let bookListArray = JSON.parse(localStorage.getItem("bookListArray") || "[]");
console.log(bookListArray);

const addBookData = (book) => {
  let result = [...bookListArray, book];
  localStorage.setItem("booklistArray", result);
};

addBookButton.addEventListener("click", () => {
  const valueBookName = bookName.value;
  const valueAuthorName = bookAuthor.value;
  bookListArray.push({
    name: valueBookName,
    author: valueAuthorName,
  });
  bookName.value = "";
  bookAuthor.value = "";
});
