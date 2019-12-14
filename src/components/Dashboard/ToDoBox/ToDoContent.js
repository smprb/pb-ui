import store from "../../../store";
import render from "../../../index";
import styles from "../Dashboard.module.css";
import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import api from "./../../../utils/api"

export const TodoContent = () => {

    //let state = store.getState();
    // let items = state.todolist.map((it) => <TodoItem text={it.text}/>);
    // const dispatch = store.dispatch;
    // store.subscribe(() => {
    //     render.apply()
    // });

    // const check = () => {
    //     dispatch({type: 'ADD'})
    // }

    let useData;
    api.get("/foo")
        .then(response => useData = response.data);

    const [items, addItem] = useState([]);

    const addEntry = () => {
        addItem(oldArray => [...oldArray, `${useData.field} ${oldArray.length}`])
    };

    return (
        <div className={styles.content}>
            {items.map(entry => <TodoItem text={entry}/>)}
            <div onClick={addEntry} className={styles.button}>
                Add
            </div>
        </div>
    )
}