import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

// Import the react-swipe-to-delete-component
import SwipeToDelete from "react-swipe-to-delete-component";
// // Import styles of the react-swipe-to-delete-component
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import useHttp from "@hooks/useHttp";

const TodoList = ({
  selectedTodoList,
  setSelectedTodoList,
  selectedDate,
  getDotDates,
}) => {
  const { sendRequest: deleteItem } = useHttp();

  const todoItemDeleteHanlder = (id) => {
    return () => {
      return deleteItem({ url: `api/todo/${id}`, method: "DELETE" }).then(
        getDotDates({
          url: `api/dotdates`,
        })
      );
    };
  };

  return (
    <div className={styles["todolist-container"]}>
      {selectedTodoList[0]?.todo_items?.map((item) => (
        <SwipeToDelete
          key={item.id ? item.id : new Date().getTime()}
          onDelete={todoItemDeleteHanlder(item.id)}
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
