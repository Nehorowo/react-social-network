import React from "react";
import cssObject from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' component='input' type='text' />
      <div>
        <button>Add text</button>
        <button>Remove text</button>
      </div>
    </form>
  );
};
const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

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
