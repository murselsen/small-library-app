const addBookButton = document.querySelector("#addBook");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#authorName");
const bookList = document.querySelector("#bookList");

let bookListArray = JSON.parse(localStorage.getItem("bookListArray") || "[]");
console.log(bookListArray);
const addBook = (book) => {
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

const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const addButton = document.querySelector("#addBook");
const bookList = document.getElementById("bookList");

function addBook(event) {
  const name = bookName.value.trim();
  const author = authorName.value.trim();
  if (name === "" || author === "") {
    alert("Lütfen kitap adı veya yazar adı giriniz.");
  }

  const li = document.createElement("li");
  li.textContent = `${name} - ${author}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "sil";

  li.appendChild(deleteBtn);
  bookList.appendChild(li);

  deleteBtn.addEventListener("click", (e) => {
    li.remove();
  });
}

addButton.addEventListener("click", addBook);
