const button = document.querySelector("button");
const displayBook = document.querySelector("#display");
const addBook = () => {
    const bookNameInput = document.querySelector("input[id='bookName']");
    const authorInput = document.querySelector("input[id='author']");
    const releaseYearInput = document.querySelector("input[id='releaseYear']");
    const pagesInput = document.querySelector("input[id='pages']");
    const categoryInput = document.querySelector("input[id='category']");
    const book = {
        bookName: bookNameInput.value,
        author: authorInput.value,
        releaseYear: Number(releaseYearInput.value),
        pages: Number(pagesInput.value),
        category: categoryInput.value,
    };
    const id = "something";
    const bookName = {
        bookName: "48 law of power",
        author: "Robert Greene",
    };
    const bookObject = {
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
export {};
