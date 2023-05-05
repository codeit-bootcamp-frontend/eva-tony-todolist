import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

const TodoList = ({
  dayKey,
  setDayKey,
  selectedTodoList,
  setSelectedTodoList,
  selectedDate,
}) => {
  return (
    <div className={styles["todolist-container"]}>
      {selectedTodoList?.map((item) => (
        <TodoItem
          key={item.id}
          dayKey={dayKey}
          setDayKey={setDayKey}
          item={item}
          onSelectedTodoList={setSelectedTodoList}
          selectedTodoList={selectedTodoList}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
};

export default TodoList;
