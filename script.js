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
    if (book.status) {
      changeStatusButton.textContent = '✓';
    } else {
      changeStatusButton.textContent = '✕';
    }
    bookStatus.appendChild(changeStatusButton);
    bookRow.appendChild(bookStatus);
    // BOOK REMOVAL BUTTON
    const bookDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑';
    bookDelete.appendChild(deleteButton);
    bookRow.appendChild(bookDelete);
  });
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  updateLibraryContent();
}

function validateForm(e) {
  e.preventDefault();
  console.log('hi!!');
  const form = document.querySelector('form');
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const pagesInput = document.querySelector('#pages');
  const checkbox = document.querySelector('#read');
  if (
    titleInput.value !== '' &&
    authorInput.value !== '' &&
    pagesInput.value !== '' &&
    pagesInput.value > 0
  ) {
    console.log('hi');
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

addBookButton.addEventListener('click', (e) => {
  validateForm(e);
  updateLibraryContent();
});

updateLibraryContent();
