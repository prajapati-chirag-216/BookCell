import React, { useRef, useImperativeHandle } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const active = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return { focus: active };
  });
  return (
    <div className="form-group">
      <label htmlFor={props.id}> {props.label} </label>
      <div
        className={`input-group ${classes["input-group"]} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <span className="input-group-addon">
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <input
          ref={inputRef}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          type={props.type}
          id={props.id}
          value={props.value}
          className={`form-control ${classes["form-control"]}`}
        />
      </div>
    </div>
  );
});
export default Input;
