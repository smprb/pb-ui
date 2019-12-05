import React from 'react';
import s from './Header.module.css';

console.log("S:" + JSON.stringify(s));

const Header = () => {
    return (
        <header className={s.header}>
            foo
        </header>
    )
}

export default Header;