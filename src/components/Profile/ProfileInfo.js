import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import cssObject from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../assets/images/userPhoto.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = React.useState(false);
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => setEditMode(false));
  };
  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={cssObject.content}>
      <img
        src={props.profile.photos.large || userPhoto}
        alt="UserPhoto"
        className={cssObject.userPhoto}
      />
      {props.isOwner && <input type="file" onChange={onPhotoSelected} />}
      <div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <h3>{profile.fullName}</h3>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <p>About me: {profile.aboutMe}</p>
      <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
      <p>My professional skills: {profile.lookingForAJobDescription}</p>
      <p>
        Contacts:{' '}
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </p>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
