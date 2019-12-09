import React from "react";
import styles from '../Dashboard.module.css'
import {TodoContent} from "./ToDoContent";

export const ToDoList = () => {
    return (
        <div className={styles.item}>
            <header>
                <h1 className={styles.header}>
                    To-Do List
                </h1>
            </header>
            <TodoContent/>
        </div>
    )
}