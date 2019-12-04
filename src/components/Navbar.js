import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className='item'>
                <a>Profile</a>
            </div>
            <div className='item'>
                <a>Messages</a>
            </div>
            <div className='item'>
                <a>News</a>
            </div>
            <div className='item'>
                <a>Music</a>
            </div>
            <div className='item'>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;