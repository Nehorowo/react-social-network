import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./components/Login/Login";
import { initApp } from "./redux/appReducer";

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <BrowserRouter>
            <HeaderContainer />
            <Navbar />
            <Route path="/profile/:userId?">
              <ProfileContainer />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </BrowserRouter>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initApp })(App);
