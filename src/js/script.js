import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
console.log(process.env.NODE_ENV);

console.log(process.env.NODE_ENV);

const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");

let bookListArray = JSON.parse(localStorage.getItem("bookListArray") || "[]");

const addBookData = (book) => {
  try {
    bookListArray.push(book);
    console.log("Book List:", bookListArray);
    localStorage.setItem("booklistArray", bookListArray);
    addBookToUI(book);
  } catch (error) {
    iziToast;
  }
};

const addBookToUI = (book) => {
  const bookItem = document.createElement("li");
  bookItem.innerHTML = `<tr>
  <td> <b>ID:</b> ${book.id}</td>
  <td> <b>Name:</b> ${book.name}</td>
  <td> <b>Author:</b> ${book.author}</td>
  </tr>`;

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
