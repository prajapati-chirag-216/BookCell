import React, { useState } from "react";
import LoginContext from "./LoginContext";

const DUMMY_ACCOUNTS = [
  {
    _id: "a1",
    email: "chirag@gmail.com",
    password: "chirag123",
  },
  {
    _id: "b1",
    email: "pratik@gmail.com",
    password: "pratik123",
  },
  {
    _id: "c1",
    email: "ravi@gmail.com",
    password: "ravi123",
  },
];

const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const varificationHandler = (email, password) => {
    const varification = DUMMY_ACCOUNTS.some(
      (account) => account.email === email && account.password === password
    );
    if (varification) {
      props.onShowBookSelf();
      setIsLoggedIn(true);
    }
  };
  const logoutHandler = () => {
    props.onHideBookSelf();
    setIsLoggedIn(false);
  };
  return (
    <LoginContext.Provider
      value={{
        onLogin: varificationHandler,
        onLogout: logoutHandler,
        isLoggedIn: isLoggedIn,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;
