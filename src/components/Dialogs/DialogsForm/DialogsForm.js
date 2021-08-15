import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Type your message"
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength100]}
          type="text"
        />
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
