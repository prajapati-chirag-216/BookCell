import React from "react";

const BookContext = React.createContext({
  addBook: (bookName) => {},
  removeBook: (bookName) => {},
  storeBooks: {},
  userBooks: {},
  userBookAdded: false,
  storeBookAdded: false,
});
export default BookContext;
