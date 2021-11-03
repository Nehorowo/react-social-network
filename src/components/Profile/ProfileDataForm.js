import React from "react";
import cssObject from "./Profile.module.css";
import { createField, Input, Textarea } from "./../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button>Save</button>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}

      <div>
        <b>Full Name: </b>
        {createField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job: </b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My skills: </b>
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>About me: </b>
        {createField("About me", "aboutMe", [], Input)}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key} className={cssObject.contact}>
              <b>
                {key}:{createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);

export default ProfileDataReduxForm;
