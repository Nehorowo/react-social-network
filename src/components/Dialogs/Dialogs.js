import React from "react";
import cssObject from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} name={d.name} />
  ));

  let dialogMessages = state.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={cssObject.dialogs}>
      <div className={cssObject.dialogsItems}>{dialogElements}</div>
      <div className={cssObject.messages}>
        <div>{dialogMessages}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
