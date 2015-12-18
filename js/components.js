
var Book = function(title, author, image, review) {
  this.title = title || '';
  this.author = author || '';
  this.image = image || 'assets/book.png';
  this.reviews = review || [];
};

Book.prototype.createBookHTML = function() {
  // put the component together from the outside in

  // section construction
  var section = document.createElement('section');
  section.className = 'main-section book-section';

  var image = document.createElement('img');
  image.className = 'book-section-image';
  image.src = this.image;

  var content = document.createElement('div');
  content.className = 'book-section-content';

  var floatClear = document.createElement('div');
  floatClear.className = 'clear-float';

  section.appendChild(image);
  section.appendChild(content);
  section.appendChild(floatClear);

  // content construction
  var title = document.createElement('h1');
  title.appendChild(document.createTextNode(this.title));

  var author = document.createElement('h2');
  author.className = 'subhead';
  author.appendChild(document.createTextNode('By ' + this.author));

  var bookButtons = document.createElement('article');
  bookButtons.className = 'section-nav book-section-nav';

  content.appendChild(title);
  content.appendChild(author);
  if(this.reviews.length > 0) {
    var ratingVal = 0;
    this.reviews.forEach(function(val, i) {
      ratingVal += val;
    });
    ratingVal = ratingVal / this.reviews.length;
    var rating = document.createElement('p');
    rating.className = 'book-rating';
    rating.appendChild(document.createTextNode('Rating: ' + ratingVal + '/5'));
    content.appendChild(rating);
  }
  content.appendChild(bookButtons);

  // bookButtons construction
  var buttonListContainer = document.createElement('div');
  buttonListContainer.className = 'navigation-list';

  bookButtons.appendChild(buttonListContainer);

  var uList = document.createElement('ul');

  buttonListContainer.appendChild(uList);

  var buttonTexts = ['FREE SAMPLE', 'REVIEW'];
  var listItems = [];
  var currListItem;
  var currLinkTag;
  for (var i = 0; i < buttonTexts.length; i++) {
    currListItem = document.createElement('li');
    currLinkTag = document.createElement('a');
    currListItem.appendChild(currLinkTag);
    currLinkTag.appendChild(document.createTextNode(buttonTexts[i]));
    listItems.push(currListItem);
  }
  for (var i = 0; i < listItems.length; i++) {
    uList.appendChild(listItems[i]);
  }
  return section;
};

Book.prototype.addBookToDOMList = function() {
  var bookColumn = document.getElementById('book-column');
  var book = this.createBookHTML();
  bookColumn.appendChild(book);
};



// testing
// var book = new Book('title', 'john doe', 'assets/elPooch.png', 1);
// book.createBookHTML();
// book.addBookToDOMList();

