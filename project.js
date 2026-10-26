const myLibrary = [];

function Book (title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
const newBook = new Book(title, author, pages, read)
myLibrary.push(newBook);
}

function renderLibrary() {
  const booklist = document.querySelector("#book-list")
  booklist.innerHTML = "";
myLibrary.forEach(book =>{
 const bookcard = document.createElement("div")

 const title = document.createElement("h2")
title.textContent = book.title;
bookcard.appendChild(title)
bookcard.setAttribute("data-id", book.id);
const author = document.createElement("h3")
author.textContent = `by ${book.author}`;
bookcard.appendChild(author);

const pages = document.createElement("p")
pages.textContent = book.pages;
bookcard.appendChild(pages)

const read = document.createElement("p")
read.textContent = book.read ? "read" : "not read yet"
bookcard.appendChild(read);


const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove"

removeBtn.addEventListener("click", function() {
   const idToDelete = book.id;
  myLibrary = myLibrary.filter(book => book.id !== idToDelete)
  renderLibrary();
})
bookcard.appendChild(removeBtn) 
booklist.appendChild(bookcard);
});
}

const button = document.getElementById("new-book-btn")
const form = document.getElementById("book-form")

button.addEventListener("click", function () {
form.style.display = "block";
});

form.addEventListener("submit", function(event) {
 event.preventDefault()
const titleName = document.getElementById("tname").value;
const authorName = document.getElementById("aname").value;
const pagesNumber = document.getElementById("pname").value;
const isRead = document.getElementById("rname").checked;
addBookToLibrary(titleName, authorName, pagesNumber, isRead);
form.style.display = "none"
form.reset();
renderLibrary()
});



addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
renderLibrary();



/*
function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function() {
    let readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
   }
}

const theHobbit = new  Book("The Hobbit", "J.R.R. Tolkien", 295, false)
 console.log(theHobbit.info());
 */