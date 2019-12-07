import React from 'react';
import styles from './Sidebar.module.css';

const userData = {
    userName: "Murat Slavich",
    userRegion: "Tomsk, Tomsk Oblast, Russian Federation"
};

const UserBox = () => {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                {userData.userName}
            </div>
            <div>
                {userData.userRegion}
            </div>
        </div>
    )
};

const ProfileBox = () => {
    return (
        <div className={styles.item}>
            My Profile
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <UserBox />
            <ProfileBox />
        </div>
    )
}

export default Sidebar;