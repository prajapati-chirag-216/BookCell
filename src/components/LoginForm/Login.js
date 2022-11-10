import React from "react";
import classes from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={`col-md-5 pull-left ${classes.card}`}>
      <div className={classes.label_div}>
        <label className={classes.label}>LOGIN</label>
      </div>
      <hr />
      <LoginForm />
    </div>
  );
};

export default Login;
