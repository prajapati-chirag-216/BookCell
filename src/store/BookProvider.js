import React, { useState } from "react";
import BookContext from "./BookContext";

const BookProvider = (props) => {
  const [userBooks, setUserBooks] = useState({
    Maths: 0,
    Physics: 0,
    Science: 0,
  });
  const [storeBooks, setStoreBooks] = useState({
    Maths: 3,
    Physics: 2,
    Science: 5,
  });
  const [userBookAdded, setUserBookAdded] = useState(false);
  const [storeBookAdded, setStoreBookAdded] = useState(false);
  const addBookHandler = (bookName) => {
    setUserBookAdded(true);
    setStoreBookAdded(false);
    setUserBooks((prevState) => {
      return {
        ...prevState,
        [bookName]: prevState[bookName] + 1,
      };
    });
    setStoreBooks((prevState) => {
      return {
        ...prevState,
        [bookName]: prevState[bookName] - 1,
      };
    });
  };
  const removeBookHandler = (bookName) => {
    setUserBookAdded(false);
    setStoreBookAdded(true);
    setUserBooks((prevState) => {
      return {
        ...prevState,
        [bookName]: prevState[bookName] - 1,
      };
    });
    setStoreBooks((prevState) => {
      return {
        ...prevState,
        [bookName]: prevState[bookName] + 1,
      };
    });
  };

  return (
    <BookContext.Provider
      value={{
        addBook: addBookHandler,
        removeBook: removeBookHandler,
        storeBooks,
        userBooks,
        userBookAdded,
        storeBookAdded,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
export default BookProvider;
