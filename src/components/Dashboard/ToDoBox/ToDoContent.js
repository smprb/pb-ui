import store from "../../../store";
import render from "../../../index";
import styles from "../Dashboard.module.css";
import React from "react";
import TodoItem from "./ToDoItem";

export const TodoContent = () => {

    let state = store.getState();
    let items = state.todolist.map((it) => <TodoItem text={it.text}/>);
    const dispatch = store.dispatch;
    store.subscribe(() => {
        render.apply()
    });

    const check = () => {
        dispatch({type: 'ADD'})
    }

    return (
        <div className={styles.content}>
            {items}
            <div onClick={check} className={styles.button}>
                Add
            </div>
        </div>
    )
}