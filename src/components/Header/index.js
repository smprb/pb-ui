import React from 'react';
import styles from './Header.module.sass';

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
        <div>
            Dashboard
        </div>
        <div>
            Users
        </div>
        <div>
            Settings
        </div>
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