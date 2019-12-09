import store from "../../store";
import styles from "./Sidebar.module.css";
import React from "react";

export const UserBox = () => {

    const userData = store.getState().userData;

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