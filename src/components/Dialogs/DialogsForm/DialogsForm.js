import React from "react";
import { reduxForm, Field } from "redux-form";

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Type your message' name='newMessageBody' component='input' type='text' />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: "dialogsForm",
})(DialogsForm);

export default DialogsReduxForm;
