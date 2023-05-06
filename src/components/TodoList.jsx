import React from "react";
import styles from "@components/Todolist.module.css";
import TodoItem from "@components/TodoItem";

// Import the react-swipe-to-delete-component
import SwipeToDelete from "react-swipe-to-delete-component";
// // Import styles of the react-swipe-to-delete-component
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import useHttp from "@hooks/useHttp";
import parseDateToString from "@library/parseDateToString";
const TodoList = ({
  selectedTodoList,
  onSelectedTodoList,
  selectedDate,
  getDotDates,
}) => {
  const { sendRequest: deleteItem } = useHttp();

  const todoItemDeleteHanlder = (item) => {
    return () => {
      const filteredTodoList = selectedTodoList.filter(
        (todo) => todo.content !== item
      );
      // const newSelectedTodoList = {
      //   date: parseDateToString(selectedDate),
      //   todo_items: [...filteredTodoList],
      // };
      onSelectedTodoList(filteredTodoList);
      return deleteItem({ url: `api/todo/${item.id}`, method: "DELETE" });
    };
  };

  return (
    <div className={styles["todolist-container"]}>
      {console.log(selectedTodoList)}
      {/* {selectedTodoList[0]?.todo_items?.map((item) => ( */}
      {selectedTodoList.map((item) => (
        <SwipeToDelete
          key={item.id ? item.id : new Date().getTime()}
          onDelete={todoItemDeleteHanlder(item)}
        >
          <TodoItem
            key={item.id ? item.id : new Date().getTime()}
            item={item}
            onSelectedTodoList={onSelectedTodoList}
            selectedTodoList={selectedTodoList}
            selectedDate={selectedDate}
          />
        </SwipeToDelete>
      ))}
    </div>
  );
};

export default TodoList;
