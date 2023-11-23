// book contient titre auteur pages (et "have you read it? checkbox")
const newBook = {
    title: "Percy Jackson: The Lighting Thief",
    author: "Rick Riordan",
    page: 472
};

const myLibrary = [newBook];
const dialogBook = document.getElementsByClassName("dialogBook")
const addBook = document.getElementsByClassName("btn");
const storage = document.getElementsByClassName("storage");
addBook[0].addEventListener("click", () =>{
    //dialogBook[0].showModal();
    const newBook = new book;
    myLibrary.push(newBook);
    console.log(myLibrary[0]);
    for (let livre = 0; livre < myLibrary.length; livre++){
        const library = document.createElement("div");
        library.style.border = "1px solid #F00"
        library.innerHTML = myLibrary[livre];
        console.log(myLibrary[livre]);
        storage[0].append(library);
    }

    console.log(newBook);
    console.log(myLibrary);
    console.log(storage[0].childNodes);
})

function book(title, author, pages) {
    this.title = prompt(title);
    this.author = prompt(author);
    this.pages = prompt(pages);
}
function addBookToLibrary() {

}