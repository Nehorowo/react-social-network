import React from "react";
import cssObject from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    //props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <div className={cssObject.posts}>
        <div>
          <textarea
            ref={newPostElement}
            defaultValue=""
            onChange={onPostChange}
          />
          <div>
            <button onClick={addPost}>Add text</button>
            <button>Remove text</button>
          </div>
        </div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
