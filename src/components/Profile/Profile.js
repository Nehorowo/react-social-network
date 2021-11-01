import React from "react";
import cssObject from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div className={cssObject.content}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
