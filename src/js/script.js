import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

console.log(
  process.env.NODE_ENV === "development"
    ? "Development Mode"
    : "Production Mode"
);

const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");

let bookListArray;

const getBookListData = () => {
  return JSON.parse(localStorage.getItem("bookListArray") || "[]");
};

console.log("Book List:", bookListArray);
const addBookData = (book) => {
  try {
    console.log("Before Book List:", bookListArray);

    bookListArray.push(book);
    console.log("Push After Book List:", bookListArray);

    console.log("Book List:", bookListArray);
    localStorage.setItem("booklistArray", JSON.stringify(bookListArray));
    addBookToUI(book);

    iziToast.success({
      position: "topRight",
      title: `${book.name}`,
      message: `adlı kitap başarıyla eklendi`,
    });
  } catch (error) {
    iziToast.error({
      position: "topRight",
      title: "Error",
      message: error.message,
    });
  }
};

const addBookToUI = (book) => {
  const bookItem = document.createElement("li");
  bookItem.className = "bookItem";

  bookItem.innerHTML = `<div class="bookContent"><span><b>Kitap Adı:</b> ${book.name}</span><span><b>Yazar Adı:</b> ${book.author}</span></div>`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";
  deleteButton.className = "delete-btn";

  bookItem.appendChild(deleteButton);
  bookList.appendChild(bookItem);

  deleteButton.addEventListener("click", (e) => {
    bookItem.remove();
    bookListArray = bookListArray.filter((item) => item.id !== book.id);
    console.log("Removed : ", bookListArray);
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

document.addEventListener("DOMContentLoaded", () => {
  bookListArray = getBookListData();
  bookListArray.forEach((book) => {
    addBookToUI(book);
  });
});
