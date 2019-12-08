import React from "react";
import styles from './Dashboard.module.css'

const TodoContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.button}>
                Add
            </div>
        </div>
    )
}

export const ToDoList = () => {
    return (
        <div className={styles.item}>
            <header>
                <h1 className={styles.header}>
                    To-Do List
                </h1>
            </header>
            <TodoContent />
        </div>
    )
}