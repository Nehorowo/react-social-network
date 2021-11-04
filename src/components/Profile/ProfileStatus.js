import React from "react";
//import Preloader from "../common/Preloader/Preloader";
import cssObject from "./Profile.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={cssObject.content}>
        {!this.state.editMode && (
          <div>
<<<<<<< HEAD
            <b>Status: </b>
=======
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "----------"}</span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
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
