import React from "react";
import clsses from "./Container.module.css";
const Container = (props) => {
  return (
    <div className={`container ${clsses.container}`}>
      <div className="column col-md-12">{props.children}</div>
    </div>
  );
};
export default Container;
