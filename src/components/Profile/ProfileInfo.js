import React from "react";
import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={cssObject.content}>
      <img src={props.profile.photos.large || userPhoto} alt='UserPhoto' className={cssObject.userPhoto} />
      {props.isOwner && <input type={"file"} onChange={onProfilePhotoSelected} />}
      <div>
        <h3>{props.profile.fullName}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <p>About me: {props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
