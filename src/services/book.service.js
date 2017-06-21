
// Client Side State of the store
// Kind of caching...
var books = [];

function getBooks() {
  return new Promise(resolve => {
    // simple caching mechanism
    if (books.length) {
      resolve(books);
    }
    else {
      setTimeout(() => {
        books = generateBooks();
        resolve(books);
      }, 500);
    }

  });
}

function getBookById(bookId) {
  return getBooks().then(books => {
    const book = books.find(book => bookId === book.id);
    return book;
  });
}

function deleteBook(book) {
  console.log('Deleting the book', book)
  var idx = books.indexOf(book)
  books.splice(idx, 1);
}

function getNext(book) {
    // select next in a cyclic way
    var idx = books.indexOf(book);
    return (idx < books.length-1)?  
          books[idx+1] : books[0];
}

function saveBook(book) {
  var idx = books.findIndex(currBook => currBook.id === book.id);
  //if this is a new book
  if (idx === -1) books.push(book);
  //if this is edit of existing book
  else books.splice(idx, 1, book);
}

// var bookService = {
//   getBooks,
//   deleteBook,
//   getNext,
//   saveBook
// }



// Used to create local data with no AJAX
function generateBooks() {
  const skills = ['JavaScript', 'CSS', 'SASS', 'Node', 'Angular 2', 'VUE'];

  return skills.map(generateBook);
}

function generateBook(skill, i) {
  return {
    id: i + 1,
    title: `Mastering ${skill}`,
    description: `${skill} lorem  ipsum dkhd daklhd dakhdk dakhdk da`,
    price: (i + 1) * 10,
  }
}









// function getProductsFromGenericAPI() {
//   const params = {
//     rows:       10,
//     id:        '{index}',
//     price:     '{number|1000}',
//     title: '{lorem|2}',
//     description: '{lorem|10}',
//     pretty: true
//   }

//   return $.getJSON('http://www.filltext.com', params);

// }

export default {
  getBooks,
  deleteBook,
  getNext,
  saveBook
}