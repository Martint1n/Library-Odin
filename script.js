// book contient titre auteur pages (et "have you read it? checkbox")
const startBook = {
    title: "Percy Jackson: The Lighting Thief",
    author: "Rick Riordan",
    pages: 472
};

const myLibrary = [startBook];
const dialogBook = document.getElementsByClassName("dialogBook")
const addBook = document.getElementsByClassName("btn");
const storage = document.getElementsByClassName("storage");

addBook[0].addEventListener("click", () => {
    //dialogBook[0].showModal();
    const newBook = new book;
    myLibrary.push(newBook);
    addBookToLibrary()
    console.log(myLibrary[0]);
    console.log(newBook);
    console.log(myLibrary);
    console.log(storage[0].childNodes);
})

function book(title, author, pages) {
    this.title = prompt(title);
    this.author = prompt(author);
    this.pages = prompt(pages);
}

/*function book(title, author, pages) {
    this.title = "#title";
    this.author = "#author"
    this.pages = "pages"
}*/

function addBookToLibrary() {
    //for (let livre = 0; livre < myLibrary.length; livre++){
    const library = document.createElement("div");
    const delet = document.createElement("button");
    library.style.border = "1px solid #F00"
    library.innerHTML = myLibrary[myLibrary.length-1].title + "<br />"+ myLibrary[myLibrary.length-1].author + "<br />" +myLibrary[myLibrary.length-1].pages;
    //console.log(myLibrary[livre]);
    //ajouter bouton remove au div
    delet.textContent = "remove";
    library.append(delet);
    storage[0].append(library);
    delet.addEventListener("click", () => {
        library.remove();
        
    })
    //}
    console.log(Object.getPrototypeOf(myLibrary) === book.prototype); //-> reeturn true
    //addlistener quand click invoque .remove
    book.prototype.retirer = function() {
        //library.remove(); works
        
    }
}