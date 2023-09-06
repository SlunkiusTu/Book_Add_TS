import {
  BookCreateType,
  BookNameEditType,
  BookIdType,
  BookOptionalType,
} from "./types.js";

const button: HTMLButtonElement = document.querySelector("button")!;
const displayBook: HTMLDivElement = document.querySelector("#display")!;

const addBook = () => {
  const bookNameInput: HTMLInputElement = document.querySelector(
    "input[id='bookName']"
  )!;

  const authorInput: HTMLInputElement =
    document.querySelector("input[id='author']")!;

  const releaseYearInput: HTMLInputElement = document.querySelector(
    "input[id='releaseYear']"
  )!;

  const pagesInput: HTMLInputElement =
    document.querySelector("input[id='pages']")!;

  const categoryInput: HTMLInputElement = document.querySelector(
    "input[id='category']"
  )!;

  const book: BookCreateType = {
    bookName: bookNameInput.value,
    author: authorInput.value,
    releaseYear: Number(releaseYearInput.value),
    pages: Number(pagesInput.value),
    category: categoryInput.value,
  };

  const id: BookIdType = "something";

  const bookName: BookNameEditType = {
    bookName: "48 law of power",
    author: "Robert Greene",
  };

  const bookObject: BookOptionalType = {
    id: "smf",
    bookName: "some",
    pages: 400,
  };

  const addToScreen = () => {
    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "books-container");

    const bookNameInfo = document.createElement("div");
    bookNameInfo.innerHTML = `Knygos Pavadinimas :${book.bookName}`;

    const authorInfo = document.createElement("div");
    authorInfo.innerHTML = `Autorius :${book.author}`;

    const releaseYearInfo = document.createElement("div");
    releaseYearInfo.innerHTML = `Leidimo metai: ${book.releaseYear}`;

    const pagesInfo = document.createElement("div");
    pagesInfo.innerHTML = `Puslapiai: ${book.pages}`;

    const categoryInfo = document.createElement("div");
    categoryInfo.innerHTML = `Kategorija ${book.category}`;

    bookContainer.appendChild(bookNameInfo);
    bookContainer.appendChild(authorInfo);
    bookContainer.appendChild(releaseYearInfo);
    bookContainer.appendChild(pagesInfo);
    bookContainer.appendChild(categoryInfo);

    displayBook.appendChild(bookContainer);
  };

  bookNameInput.value = "";
  authorInput.value = "";
  releaseYearInput.value = "";
  pagesInput.value = "";
  categoryInput.value = "";

  addToScreen();
};

button.addEventListener("click", addBook);
