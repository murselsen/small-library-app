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
const localStorageBookListKey = "booklistArray";
let bookListArray;

const getBookListData = () => {
  return JSON.parse(localStorage.getItem(localStorageBookListKey));
};

const addBookData = (book) => {
  try {
    console.log("Before Book List:", bookListArray);

    if (bookListArray === null ) {
      bookListArray = []; // Array Initialize
      bookListArray.push(book);
    } else {
      if (bookListArray.length > 0) { 
        book.id = bookListArray.pop().id + 1;
        bookListArray.push(book);
      }
      
    }

    console.log("Push After Book List:", bookListArray);

    console.log("Book List:", bookListArray);
    /* localStorage.setItem(
      localStorageBookListKey,
      JSON.stringify(bookListArray)
    ); */
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

  bookItem.innerHTML = `<div class="bookContent"><span><b>Kitap Kımlik:</b> ${book.id}</span> <span><b>Kitap Adı:</b> ${book.name}</span><span><b>Yazar Adı:</b> ${book.author}</span></div>`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";
  deleteButton.className = "delete-btn";

  bookItem.appendChild(deleteButton);
  bookList.appendChild(bookItem);

  deleteButton.addEventListener("click", (e) => {
    bookItem.remove();
    let bookListArrayFilter = bookListArray.filter(
      (item) => item.id !== book.id
    );
    console.log("Removed : ", bookListArrayFilter);
    localStorage.setItem(
      localStorageBookListKey,
      JSON.stringify(bookListArrayFilter)
    );
  });
};

bookListArray = getBookListData();

console.log("Book List:", bookListArray);
if (bookListArray !== null) {
  bookListArray.forEach((book) => {
    addBookToUI(book);
  });
}

addBookButton.addEventListener("click", () => {
  console.log("Add Book Button Clicked");
  console.log(bookListArray);
  let valueBookId = 1;
  if (bookListArray !== null) {
    valueBookId = bookListArray.pop().id + 1;
  }
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
