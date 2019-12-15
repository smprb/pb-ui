import React from 'react';
import styles from './Sidebar.module.css';
import store from '../../store'

const SideBar = () => {

    let state = store.getState();

    return (
        <div className={styles.sidebar}>
            Sidebar
        </div>
    )
}

export default SideBar;