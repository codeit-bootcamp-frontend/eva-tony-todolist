import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

const TodoList = ({ selectedTodoList, setSelectedTodoList }) => {
  return (
    <div className={styles["todolist-container"]}>
      {selectedTodoList?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onSelectedTodoList={setSelectedTodoList}
          selectedTodoList={selectedTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
