import React, { useState } from "react";
import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={cssObject.content}>
      <img src={props.profile.photos.large || userPhoto} alt='UserPhoto' className={cssObject.userPhoto} />
      {props.isOwner && <input type={"file"} onChange={onProfilePhotoSelected} />}

      {editMode ? (
        <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          enableEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

const Contact = ({ title, value }) => {
  return (
    <div className={cssObject.contact}>
      {title}: {value}
    </div>
  );
};

export const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <button onClick={props.enableEditMode}>Edit</button>}
      <div>
        <b>{props.profile.fullName}</b>
      </div>

      <div>
        <b>Looking for a job: </b>
        {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.lookingForAJob && <div>My skills: {props.profile.lookingForAJobDescription}</div>}
      <div>
        <b>About me: </b>
        {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((key) => {
          return <Contact key={key} title={key} value={props.profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
