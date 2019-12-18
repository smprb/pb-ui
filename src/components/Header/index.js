import React from 'react';
import styles from './Header.module.sass';

const Brand = () => {
    return <div className={styles.brand}>
        ProjectBuilder
    </div>
}

const SidebarToggler = () => {
    return <div>
        <button className={styles.toggler}/>
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

const Header = () => {
    return <div className={styles.header}>
        <Brand />
        <SidebarToggler />
        <NavigationBar />
    </div>
}

export default Header;