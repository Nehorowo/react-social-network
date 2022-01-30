import React from 'react';
import cssObject from './NavUserInfo.module.css';

const NavUserInfo = () => {
  return (
    <div className={cssObject.wrapper}>
      <img class={cssObject.avatar} src="https://thispersondoesnotexist.com/image" alt="Avatar" />
    </div>
  );
};

export default NavUserInfo;
