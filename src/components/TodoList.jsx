import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

const TodoList = ({ currentDate, data }) => {
  return (
    <div className={styles["todolist-container"]}>
      <span>리스트</span>
      <TodoItem />
    </div>
  );
};

export default TodoList;
