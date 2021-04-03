import React from "react";
import cssObject from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={cssObject.posts}>
        <div>
          <textarea
            ref={newPostElement}
            defaultValue="it-kamasutra"
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