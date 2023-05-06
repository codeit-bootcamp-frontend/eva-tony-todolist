import React, { useRef } from "react";
import styles from "@components/AddButton.module.css";

const AddButton = ({ selectedTodoList, onAddItem }) => {
  // let length = selectedTodoList?.length;

  // selectedTodoList가 []일 때 length가 0이라 생기는 키 중복 이슈
  // let todoItemId = length ? useRef(length) : null;

  const handleClick = () => {
    // if (!length) return;
    // todoItemId.current++;
    const newItem = {
      id: new Date().getTime(), // 임시적으로 사용하는 id
      isDone: false,
      content: "",
    };
    // if (selectedTodoList.length) {
    if (selectedTodoList) {
      // selectedTodoList.unshift(newItem);
      onAddItem([newItem, ...selectedTodoList]);
    } else {
      // const tempObj = [
      //   {
      //     id: new Date().getTime(),
      //     date: "",
      //     todo_items: [
      //       {
      //         content: "",
      //       },
      //     ],
      //   },
      // ];
      onAddItem(["", ...selectedTodoList]);
    }
  };

  return (
    <div className={styles["button-box"]} onClick={handleClick}>
      <button className={styles.button}>+</button>
    </div>
  );
};

export default AddButton;
