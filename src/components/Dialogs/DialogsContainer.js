import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    props.store.dispatch(updateNewMessageBodyCreator());
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messagesPage={state}
    />
  );
};

export default DialogsContainer;
