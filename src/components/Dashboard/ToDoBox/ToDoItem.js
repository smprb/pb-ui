import styles from "../Dashboard.module.css";
import React from "react";

const TodoItem = (props) => {
    return (
        <div className={styles.todoitem}>
            {props.text}
        </div>
    )
}

export default TodoItem;