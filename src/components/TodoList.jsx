import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

// Import the react-swipe-to-delete-component
import SwipeToDelete from "react-swipe-to-delete-component";
// // Import styles of the react-swipe-to-delete-component
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";

const TodoList = ({ selectedTodoList, setSelectedTodoList, selectedDate }) => {
  const todoItemDeleteHanlder = () => {
    console.log("삭제 되었습니다.");
  };

  return (
    <div className={styles["todolist-container"]}>
      {selectedTodoList[0]?.todo_items?.map((item) => (
        <SwipeToDelete
          key={item.id ? item.id : new Date().getTime()}
          onDelete={todoItemDeleteHanlder}
        >
          <TodoItem
            key={item.id ? item.id : new Date().getTime()}
            item={item}
            onSelectedTodoList={setSelectedTodoList}
            selectedTodoList={selectedTodoList}
            selectedDate={selectedDate}
          />
        </SwipeToDelete>
      ))}
    </div>
  );
};

export default TodoList;
