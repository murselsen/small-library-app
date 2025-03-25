const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");

let bookListArray = JSON.parse(localStorage.getItem("bookListArray") || "[]");
console.log(bookListArray);

const addBookData = (book) => {
  bookListArray.push(book);
  console.log("Book List:", bookListArray);
  localStorage.setItem("booklistArray", bookListArray);
};

const addBookToUI = (book) => {
  const bookItem = document.createElement("li");
  bookItem.textContent = `<b>ID:</b> ${book.id} | ${book.name} - ${book.author}`;
 };



addBookButton.addEventListener("click", () => {
  const valueBookId = bookListArray.length + 1;
  const valueBookName = bookName.value;
  const valueAuthorName = bookAuthor.value;

  addBookData({
    id: valueBookId,
    name: valueBookName,
    author: valueAuthorName,
  });
  bookName.value = "";
  bookAuthor.value = "";
});
