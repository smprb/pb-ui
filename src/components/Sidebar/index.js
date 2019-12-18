import React from 'react';
import styles from './Sidebar.module.sass';

const Item = () => {
    return <div className={styles.sidebarItem}>
        Item
    </div>
}

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default SideBar;