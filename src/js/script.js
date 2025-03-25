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
  addBookToUI(book);
};

const addBookToUI = (book) => {
  const bookItem = document.createElement("li");
  bookItem.innerHTML = `<b>ID: ${book.id}</b> <strong>${book.name}</strong>  ${book.author} `;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";

  bookItem.appendChild(deleteButton);
  bookList.appendChild(bookItem);

  deleteButton.addEventListener("click", (e) => {
    bookItem.remove();
    bookListArray = bookListArray.filter((item) => item.id !== book.id);
    localStorage.setItem("bookListArray", JSON.stringify(bookListArray));
  });
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
