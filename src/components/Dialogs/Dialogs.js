import React from "react";
import cssObject from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsReduxForm from "./DialogsForm/DialogsForm";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogElements = state.dialogs.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />);

  let dialogMessages = state.messages.map((m) => <Message id={m.id} key={m.id} message={m.message} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={cssObject.dialogs}>
      <div className={cssObject.dialogsItems}>{dialogElements}</div>
      <div className={cssObject.messages}>
        <div>{dialogMessages}</div>
        <div>
          <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
