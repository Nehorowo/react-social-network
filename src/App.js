import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, BrowserRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import store from "./redux/store";
import LoginPage from "./components/Login/Login";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <HeaderContainer />
        <Navbar />
        <Route path="/dialogs">
          <DialogsContainer />
        </Route>
        <Route path="/profile/:userId?">
          <ProfileContainer />
        </Route>
        <Route path="/users">
          <UsersContainer />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

window.store = store;

export default App;
