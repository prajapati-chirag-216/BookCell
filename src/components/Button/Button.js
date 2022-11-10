import React, { useState } from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  const [btnClass, setBtnClass] = useState(classes["btn_control"]);
  const [moveBtn, setMoveBtn] = useState(false);
  const BtnClassHandler = () => {
    if (!props.formIsValid) {
      if (moveBtn) {
        setBtnClass(classes["btn_control"]);
        setMoveBtn(false);
      } else {
        setBtnClass(classes["move-btn_control"]);
        setMoveBtn(true);
      }
    }
  };
  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        onMouseOver={BtnClassHandler}
        className={btnClass}
      >
        Login
      </button>
    </div>
  );
};
export default Button;
