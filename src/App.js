import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, BrowserRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <BrowserRouter>
          <HeaderContainer />
          <Navbar />
          <Route path='/dialogs'>
            <DialogsContainer />
          </Route>
          <Route path='/profile/:userId?'>
            <ProfileContainer />
          </Route>
          <Route path='/users'>
            <UsersContainer />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

export default connect(mapStateToProps, { initializeApp })(App);
