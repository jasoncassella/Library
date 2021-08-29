let myLibrary = [];
const addBookButton = document.querySelector('#add-book');
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function updateLibraryContent() {
  const bookList = document.querySelector('#table-body');
  bookList.textContent = '';
  myLibrary.forEach((book) => {
    const bookRow = document.createElement('tr');
    bookRow.classList.add('book-info');
    bookList.appendChild(bookRow);
    // BOOK TITLE
    const bookTitle = document.createElement('td');
    bookTitle.textContent = book.title;
    bookRow.appendChild(bookTitle);
    // BOOK AUTHOR
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = book.author;
    bookRow.appendChild(bookAuthor);
    // BOOK PAGES
    const bookPages = document.createElement('td');
    bookPages.textContent = book.pages;
    bookRow.appendChild(bookPages);
    // BOOK STATUS BUTTON
    const bookStatus = document.createElement('td');
    const changeStatusButton = document.createElement('button');
    if (book.status === true) {
      changeStatusButton.style.color = 'green';
      changeStatusButton.textContent = '✓';
    } else {
      changeStatusButton.style.color = 'red';
      changeStatusButton.textContent = '✕';
    }
    changeStatusButton.addEventListener('click', (e) => {
      if (changeStatusButton.textContent === '✓') {
        e.target.style.color = 'red';
        e.target.textContent = '✕';
      } else if (changeStatusButton.textContent === '✕') {
        e.target.style.color = 'green';
        e.target.textContent = '✓';
      }
    });
    bookStatus.appendChild(changeStatusButton);
    bookRow.appendChild(bookStatus);
    // BOOK REMOVAL BUTTON
    const bookDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑';
    deleteButton.classList.add('delete')
    bookDelete.appendChild(deleteButton);
    bookRow.appendChild(bookDelete);
    deleteButton.addEventListener('click', (e) => {
      const { target } = e;
      const tr = target.parentNode.parentNode.rowIndex - 1;
      myLibrary.splice(tr, 1);
      updateLibraryContent();
    });
  });
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  updateLibraryContent();
}

function validateForm(e) {
  e.preventDefault();
  const form = document.querySelector('form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const pagesInput = document.querySelector('#pages');
  if (
    titleInput.value !== '' &&
    authorInput.value !== '' &&
    pagesInput.value !== '' &&
    pagesInput.value > 0
  ) {
    if (checkbox.checked) {
      addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        true
      );
    } else {
      addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        false
      );
    }
    form.reset();
  }
}

const checkbox = document.querySelector('#read');

addBookButton.addEventListener('click', (e) => {
  validateForm(e);
  updateLibraryContent();
});

updateLibraryContent();
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, true);