import React from 'react'
import cssObject from './Header.module.css'

const Header = () => {
  return (
    <header className={cssObject.header}>
      <div className={cssObject.avatar}>
        <img
          src="https://sun9-56.userapi.com/NfPoY1Rr_ZMhE6LRQ4OD95THzrG-CcEg-l5xDA/qYFQMBAZKew.jpg"
          alt="mainImage"
        />
      </div>
    </header>
  );
}

export default Header