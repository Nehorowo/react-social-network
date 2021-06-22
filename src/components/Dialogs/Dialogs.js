import React from "react";
import cssObject from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let dialogMessages = state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
