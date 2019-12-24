import React from 'react';
import styles from './Header.module.sass';
import {Link} from "react-router-dom";

const linkStyle = {
    textDecoration: 'none',
    padding: '0 10px',
    cursor: 'pointer'
};

const Brand = () => {
    return <div className={styles.brand}>
        ProjectBuilder
    </div>
}

const SidebarToggler = (props) => {
    const {toggleSidebar, isSidebarShowing} = props;
    const toggle = () => toggleSidebar(!isSidebarShowing);

    return <div>
        <button className={styles.toggler} onClick={toggle}/>
    </div>
}

const NavigationBar = () => {
    return <div className={styles.navigation}>
        <Link to={ "/project" } style={linkStyle}>
            Dashboard
        </Link>
        <Link to={ "/profile" } style={linkStyle}>
            Profile
        </Link>
        <Link to={ "/settings" } style={linkStyle}>
            Settings
        </Link>
    </div>
}

const Header = (props) => {
    return <div className={styles.header}>
        <Brand />
        <SidebarToggler toggleSidebar={props.toggleSidebar} isSidebarShowing={props.isSidebarShowing}/>
        <NavigationBar />
    </div>
}

export default Header;