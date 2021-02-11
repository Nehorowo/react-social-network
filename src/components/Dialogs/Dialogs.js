import React from "react";
import cssObject from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  

  let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
  let dialogMessages = props.messages.map(m => <Message id={m.id} message={m.message} />)

  return (
    <div className={cssObject.dialogs}>
      <div className={cssObject.dialogsItems}>
       {dialogElements}
      </div>  
      <div className={cssObject.messages}>
       {dialogMessages}
      </div>
    </div>
  );
};

export default Dialogs;