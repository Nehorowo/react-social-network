import React from "react";
import cssObject from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={cssObject.content}>
      <div>Current status</div>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
