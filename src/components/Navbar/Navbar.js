import React from 'react'
import { NavLink } from 'react-router-dom'
import cssObject from './Navbar.module.css' 

const Navbar = () => {
    return (
        <nav className={cssObject.nav}>
        <div className={cssObject.navItem}><NavLink to='/profile' activeClassName={cssObject.activeLink}>Profile</NavLink></div>
        <div className={cssObject.navItem}><NavLink to='/dialogs' activeClassName={cssObject.activeLink}>Dialogs</NavLink></div>
        <div className={cssObject.navItem}><NavLink to='/news'>News</NavLink></div>
        <div className={cssObject.navItem}><NavLink to='/music'>Music</NavLink></div>
        <div className={cssObject.navItem}><NavLink to='/settings'>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar