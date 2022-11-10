import React, { useState, useContext, useEffect } from "react";
import classes from "./UserBookSelf.module.css";
import BookContext from "../../store/BookContext";

import item_audio from "../../static/item_audio.mp3";

const UserBookSelf = () => {
  const audio = new Audio(item_audio);
  const [bookIsAdded, setBookIsAdded] = useState(false);
  const bookCtx = useContext(BookContext);
  const { userBookAdded, userBooks, removeBook } = bookCtx;

  useEffect(() => {
    if (userBookAdded) {
      setBookIsAdded(true);
      audio.play();
      const timer = setTimeout(() => {
        setBookIsAdded(false);
        audio.pause();
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [userBooks, userBookAdded]);

  const removeBookHandler = (book_id) => {
    const bookName = document.getElementsByClassName(book_id)[0].innerHTML;
    removeBook(bookName);
  };

  const BookSelf = Object.keys(userBooks).map((book, index) => {
    let col = [];
    for (let i = 0; i < userBooks[book]; i++) {
      col.push(
        <div
          onClick={removeBookHandler.bind(null, `book_label-${index + 1}`)}
          key={Math.random()}
          className={classes[`row-${index + 1}`]}
        >
          <label className={`book_label-${index + 1}`}>{book}</label>
        </div>
      );
    }
    return (
      <div key={index} className={classes["row"]}>
        {col}
      </div>
    );
  });

  return (
    <div className="col-md-6 pull-left">
      <div className={classes["book-self_control"]}>
        <div className={classes.self}>
          <div className={classes.title}>
            <label className={bookIsAdded ? classes.bump : ""}>BOOKSELF</label>
          </div>
          {BookSelf}
        </div>
      </div>
    </div>
  );
};
export default UserBookSelf;
