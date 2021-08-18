import React from "react";
import cssObject from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cssObject.header}>
      <div className={cssObject.avatar}>
        <img
          src="https://sun9-56.userapi.com/NfPoY1Rr_ZMhE6LRQ4OD95THzrG-CcEg-l5xDA/qYFQMBAZKew.jpg"
          alt="mainImage"
        />
      </div>
      <div className={cssObject.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
