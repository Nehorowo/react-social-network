<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Suspense } from "react";
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
import "./App.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
<<<<<<< HEAD
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
=======
import HeaderContainer from "./components/Header/HeaderContainer";
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
import LoginPage from "./components/Login/Login";
import { initApp } from "./redux/appReducer";

<<<<<<< HEAD
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
=======
//lazy loading
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

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
        <Suspense fallback={<Preloader />}>
          <HashRouter>
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
          </HashRouter>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

export default connect(mapStateToProps, { initializeApp })(App);
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
