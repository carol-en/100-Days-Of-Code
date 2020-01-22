


// ===================================
// EDABIT CHALLENGE, JAVASCRIPT - LEVEL: HARD
// ===================================


// Create a Book constructor that has two properties :
// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

class Books {
    constructor(title, author) {
        this.title = title,
        this.author = author
    }

    getTitle() {
        console.log(`Title: ${this.title}`);
        return `Title: ${this.title}`;
    }

    getAuthor() {
        console.log(`Author: ${this.author}`);
        return `Author: ${this.author}`;
    }
}

const PP    = new Books("Pride and Prejudice", "Jane Austen");
const H     = new Books("Hamlet", "William Shakespeare");
const WP    = new Books("War and Peace", "Leo Tolstoy");
const HP    = new Books("Harry Potter", "JK Rowling");

console.log(PP);
console.log(H);
console.log(WP);
console.log(HP);

// ==================

console.log(HP.title);
console.log(HP.author);
HP.getTitle();
HP.getAuthor();

