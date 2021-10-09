import React from "react";
import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={cssObject.content}>
      <img src={props.profile.photos.large} alt='UserPhoto' className={cssObject.userPhoto} />
      <div>
        <h3>{props.profile.fullName}</h3>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>About me: {props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
