import React from "react";
import {ToDoList} from "./ToDoBox/ToDoList";
import styles from "./Dashboard.module.css";
import store from '../../store'
import {Posts} from "./Posts";
import {Plans} from "./Plans";
import {Suggestion} from "./Suggestion";

const Dashboard = () => {

    const state = store.getState();

    return (
        <div className={styles.dashboard}>
            <ToDoList todoList={state.todolist} dispatch={store.dispatch} subscribe={store.subscribe}/>
            <Suggestion />
            <Plans />
            <Posts />
        </div>
    )
}

export default Dashboard;