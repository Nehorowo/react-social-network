import React from "react";
import cssObject from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cssObject.post}>
      <img src="https://thispersondoesnotexist.com/image" alt="userPhoto" />
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
