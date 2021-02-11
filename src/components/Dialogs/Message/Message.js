import React from "react";
import cssObject from "./../Dialogs.module.css";


const Message = (props) => {
  return <div className={cssObject.message}>{props.message}</div>;
};

export default Message;