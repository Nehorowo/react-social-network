import { React, useState, useEffect } from "react";
//import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={cssObject.content}>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "empty status"}</span>
        </div>
      )}

      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </div>
  );
};
// if (!props.profile) {
// return <Preloader />;
//}

export default ProfileStatusWithHooks;
