import React from "react";
import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div className={cssObject.content}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
// if (!props.profile) {
// return <Preloader />;
//}

export default ProfileStatus;
