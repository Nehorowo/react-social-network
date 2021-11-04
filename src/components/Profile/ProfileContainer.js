import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
<<<<<<< HEAD
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "./../../redux/profileReducer";
=======
import { getUserProfile, getStatus, updateStatus } from "./../../redux/profileReducer";
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/profile");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId && this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
<<<<<<< HEAD
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
=======
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
)(ProfileContainer);
