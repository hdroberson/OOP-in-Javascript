/*
class Book {
    constructor(title, author){
    this.title = title;
    this.author = author;
    }
}

let bookOne = new book ('Star Wars ', 'George Lucas');
let bookTwo = new book ('Ulysses ', 'James Joyce');
let bookThree = new book ('Moby Dick ', 'Herman Melville');
let bookFour = new book ('Hamlet ', 'William Shakespeare');

console.log('bookOne');
console.log('bookTwo');
console.log('bookThree');
console.log('bookFour');
*/

var Book = function(title, available, checkedOut, authors) {

	this.title = title;
    this.available = available;
    this.checkedOut = checkedOut;
	this.authors = authors;
}

var Author = function(firstName, lastName) {

	this.firstName = firstName;
	this.lastName = lastName;
}

Book.prototype.checkOut = function() {
  this.available = false;
 
}

Book.prototype.checkIn = function() {
  this.available = true;
}

Book.prototype.isCheckedOut = function() {
	if (this.available === true) {
		return false;
	} else {
		return true;
	}
}


var catalog = [];

catalog[0] = new Book('Star Wars', false, [new Author('George', 'Lucas')]);
catalog[1] = new Book('Ulysses', false, [new Author('James', 'Joyce')]);
catalog[2] = new Book('Moby Dick', true, [new Author('Herman', 'Melville')]);
catalog[3] = new Book('Hamlet', true,[new Author('William', 'Shakespeare')]);
catalog[4] = new Book('The Sport of Kings', false, [new Author('C.E.', 'Morgan')]);

/*
function library() {
    if (available = true){
    catalog[1,2,3,4] = 'checkOut';
    }else {
    catalog[1,2,3,4] = 'checkIn';
    }

    return library 
}
*/
