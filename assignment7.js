function Book(title, author, isbn, isBorrowed = false) {
  // Let's store the book's essential details.
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.isBorrowed = isBorrowed;

  /**
   * Marks the book as borrowed.
   * It checks if the book is already borrowed and updates the status accordingly.
   */
  this.borrow = function() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`[LOG] Book "${this.title}" (ISBN: ${this.isbn}) has been checked out.`);
    } else {
      console.warn(`[WARNING] Book "${this.title}" (ISBN: ${this.isbn}) is already borrowed.`);
    }
  };

  /**
   * Marks the book as returned.
   * It verifies if the book was actually borrowed before changing the status.
   */
  this.returnBook = function() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`[LOG] Book "${this.title}" (ISBN: ${this.isbn}) has been returned.`);
    } else {
      console.warn(`[WARNING] Book "${this.title}" (ISBN: ${this.isbn}) was not checked out to begin with.`);
    }
  };
}

/**
 * Represents a collection of books, our Library.
 * It manages the addition, retrieval, and listing of books.
 */
function Library() {
  //  An array to hold all the Book objects in our library.
  this.books = [];

  /**
   * Adds a new book to the library's collection.
   * @param {Book} book - The Book object to add.
   */
  this.addBook = function(book) {
    this.books.push(book);
    console.log(`[LOG] Book "${book.title}" (ISBN: ${book.isbn}) has been added to the library's catalog.`);
  };

  this.findBookByISBN = function(isbn) {
    for (const book of this.books) {
      if (book.isbn === isbn) {
        return book; // Found it!
      }
    }
    return null; // Book not found.
  };

  /**
   * Retrieves a list of books that are currently available (not borrowed).
   * @returns {Book[]} An array of Book objects that are not borrowed.
   */
  this.listAvailableBooks = function() {
    const availableBooks = this.books.filter(book => !book.isBorrowed);
    if (availableBooks.length === 0) {
      console.log("[INFO] No books are currently available in the library.");
    }
    return availableBooks;
  };

  /**
   * Retrieves a list of books that are currently borrowed.
   * @returns {Book[]} An array of Book objects that are borrowed.
   */
  this.listBorrowedBooks = function() {
    const borrowedBooks = this.books.filter(book => book.isBorrowed);
    if (borrowedBooks.length === 0) {
      console.log("[INFO] No books are currently borrowed from the library.");
    }
    return borrowedBooks;
  };

  /**
     * Displays all books in the library
     * @returns {void}
     */
    this.displayAllBooks = function() {
        if (this.books.length === 0) {
            console.log("The library is empty.");
            return;
        }

        console.log("--- Library Contents ---");
        this.books.forEach((book) => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Borrowed: ${book.isBorrowed ? "Yes" : "No"}`);
        });
    };
}

// --- Example Usage ---

//  Create some book instances.
const theLordOfTheRings = new Book("The Lord of the Rings", "J.R.R. Tolkien", "9780547928227");
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", "9780141439518");
const hitchhikersGuide = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "9780345391803");

// Instantiate the library.
const mainLibrary = new Library();

// Add the books to the library.
mainLibrary.addBook(theLordOfTheRings);
mainLibrary.addBook(prideAndPrejudice);
mainLibrary.addBook(hitchhikersGuide);

// Display all books in the library
mainLibrary.displayAllBooks();

// Find a book by ISBN.
const foundBook = mainLibrary.findBookByISBN("9780141439518");
if (foundBook) {
  console.log("We found this book:", foundBook);
} else {
  console.log("Sorry, that book was not found.");
}

// Borrow some books.
theLordOfTheRings.borrow();
prideAndPrejudice.borrow();

// Show the current state of the library.
mainLibrary.displayAllBooks();

// List available books.
const availableBooks = mainLibrary.listAvailableBooks();
console.log("Available books:", availableBooks);

// List borrowed books.
const borrowedBooks = mainLibrary.listBorrowedBooks();
console.log("Borrowed books:", borrowedBooks);

// Return a book.
theLordOfTheRings.returnBook();

// Show the updated state.
mainLibrary.displayAllBooks();

// List available books after return.
const availableBooksAfterReturn = mainLibrary.listAvailableBooks();
console.log("Available books after return:", availableBooksAfterReturn);
