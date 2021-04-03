import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Route path="/dialogs">
          <Dialogs
            state={props.state.messagesPage}
          />
        </Route>
        <Route path="/profile">
          <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
