import React from 'react';
import styles from './Sidebar.module.css';

const UserBox = (props) => {

    const userData = props.userData;

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

const Sidebar = (props) => {

    let state = props.state;

    return (
        <div className={styles.sidebar}>
            <UserBox userData={state.userData}/>
            <ProfileBox />
        </div>
    )
}

export default Sidebar;