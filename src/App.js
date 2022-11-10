import React, { useState } from "react";
import Container from "./components/UI/Container";
import Login from "./components/LoginForm/Login";
import NavBar from "./components/NavBar/NavBar";
import StoreBookSelf from "./components/StoreBookSelf/StoreBookSelf";
import LoginProvider from "./store/LoginProvider";
import UserBookSelf from "./components/UserBookSelf/UserBookSelf";
import BookProvider from "./store/BookProvider";

const App = () => {
  const [showBookSelf, setShowBookSelf] = useState(false);
  const showBookSelfHandler = () => setShowBookSelf(true);
  const hideBookSelfHandler = () => setShowBookSelf(false);

  return (
    <Container>
      <LoginProvider
        onShowBookSelf={showBookSelfHandler}
        onHideBookSelf={hideBookSelfHandler}
      >
        <NavBar />
        <BookProvider>
          {showBookSelf ? <UserBookSelf /> : <Login />}
          {showBookSelf && <StoreBookSelf />}
        </BookProvider>
      </LoginProvider>
    </Container>
  );
};
export default App;
