import React, { useState, useEffect, useContext } from "react";
import BookContext from "../../store/BookContext";
import classes from "./StoreBookSelf.module.css";
import item_audio from "../../static/item_audio.mp3";

const StoreBookSelf = () => {
  const audio = new Audio(item_audio);
  const bookCtx = useContext(BookContext);
  const [bookIsAdded, setBookIsAdded] = useState(false);
  const { storeBookAdded, storeBooks, addBook } = bookCtx;

  useEffect(() => {
    if (storeBookAdded) {
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
  }, [storeBooks, storeBookAdded]);

  const addBookHandler = (book_id) => {
    const bookName = document.getElementsByClassName(book_id)[0].innerHTML;
    addBook(bookName);
  };

  const BookSelf = Object.keys(storeBooks).map((book, index) => {
    let col = [];
    for (let i = 0; i < storeBooks[book]; i++) {
      col.push(
        <div
          onClick={addBookHandler.bind(null, `book_label-${index + 1}`)}
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
    <div className="col-md-6 pull-right">
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
export default StoreBookSelf;
