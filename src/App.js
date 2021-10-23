import React, { Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

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
