
var app = {
  renderBooks: function() {
    var currBook;
    // render all the books that exist in the appData
    appData.books.forEach(function(bookData, i) {
      currBook = new Book(bookData.title, bookData.author, bookData.image);
      currBook.createBookHTML();
      currBook.addBookToDOMList();
    });
  },
  addBook: function(title, author) {
    // create a record object
    var bookRecord = {
      "title": title,
      "author": author,
      "reviews": [],
      "image": "assets/book.png"
    }
    // save the record object in the appData
    appData.books.push(bookRecord);
    // create a node and render
    var bookNode = new Book(bookRecord.title, bookRecord.author, bookRecord.image);
    bookNode.createBookHTML();
    bookNode.addBookToDOMList();
  },
  init: function() {
    this.renderBooks();
    // save the "this" value to a var for use inside function
    var context = this;
    window.onload = function () {
      // click handlers for "welcome back"
      document.getElementById("welcome-back-no").onclick = function() {
        document.getElementById('welcome-back').style.display = 'none';
      };
      document.getElementById("welcome-back-yes").onclick = function() {
        document.getElementById('welcome-back').style.display = 'none';
        document.getElementById('enter-book').style.display = 'block';
      };
      // click handler for add book
      document.getElementById("enter-book-submit").onclick = function() {
        var title = document.getElementById('book-title-input').value;
        var author = document.getElementById('book-author-input').value;

        // if the book already exists, notify user
        // and leave form available for another submission
        for (var i = 0; i < appData.books.length; i++) {
          if(title === appData.books[i].title) {
            alert('This book already exists!');
            return;
          }
        }

        document.getElementById('enter-book').style.display = 'none';
        context.addBook(title, author);
      };

      // click handler for small nav
      document.getElementById("menu-toggle").onclick = function() {
        var smallNav = document.getElementById('small-nav');
        // toggle smallnav to show or hide
        if(smallNav.style.display === 'none' || smallNav.style.display === '') {
          this.src = 'assets/ic_close_24px.svg';
          smallNav.style.display = 'block';
        } else {
          this.src = 'assets/ic_menu_24px.svg';
          smallNav.style.display = 'none';
        }
      };
    };

  }
}

app.init();




