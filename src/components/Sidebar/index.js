import React from 'react';
import styles from './Sidebar.module.css';
import store from '../../store'
import {ProfileBox} from "./ProfileBox";
import {UserBox} from "./UserBox";

const SideBar = () => {

    let state = store.getState();

    return (
        <div className={styles.sidebar}>
            <UserBox userData={state.userData}/>
            <ProfileBox />
        </div>
    )
}

export default SideBar;