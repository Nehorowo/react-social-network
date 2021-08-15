import React from "react";
import cssObject from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        component={Textarea}
        placeholder="What's new?"
        type="text"
        validate={[required, maxLength10]}
      />
      <div>
        <button>Add text</button>
        <button>Remove text</button>
      </div>
    </form>
  );
};
const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={cssObject.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
