import React from "react";
import {ToDoList} from "./ToDoList";
import styles from "./Dashboard.module.css";

const dashboardStyle = {
    'margin': '0 auto',
    'padding': '0',
    'flex': '3 0px',
    'order': '2'
};

const Suggestion = () => {
    return(
        <div className={styles.item}>
            Suggestion
        </div>
    )
}

const Plans = () => {
    return(
        <div className={styles.item}>
            Plans
        </div>
    )
}

const Posts = () => {
    return(
        <div className={styles.item}>
            Posts
        </div>
    )
}

const Dashboard = () => {
    return (
        <div style={dashboardStyle}>
            <ToDoList />
            <Suggestion />
            <Plans />
            <Posts />
        </div>
    )
}

export default Dashboard;