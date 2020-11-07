import React from 'react'
import cssObject from './Navbar.module.css' 


const Navbar = () => {
    return (
        <nav className='nav'>
        <div className='navItem'><a href='#s'>Profile</a></div>
        <div className='navItem'><a href='#s'>Messages</a></div>
        <div className='navItem'><a href='#s'>News</a></div>
        <div className='navItem'><a href='#s'>Music</a></div>
        <div className='navItem'><a href='#s'>Settings</a></div>
        </nav>
    )
}

export default Navbar