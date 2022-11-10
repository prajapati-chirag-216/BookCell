import React, { useContext } from "react";
import LoginContext from "../../store/LoginContext";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  const ctx = useContext(LoginContext);
  return (
    <header className={classes["main-header"]}>
      <h1>Book Self</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
