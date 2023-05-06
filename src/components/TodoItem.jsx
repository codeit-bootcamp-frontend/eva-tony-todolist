import React, { useRef, useEffect, useState } from "react";
import useHttp from "@hooks/useHttp";
import styles from "@components/TodoItem.module.css";
import parseDateToString from "@library/parseDateToString";
// Import styles of the react-swipe-to-delete-component
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";

import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/Md";

import { HiOutlineTrash } from "react-icons/Hi";

const TodoItem = ({
  item,
  onSelectedTodoList,
  selectedTodoList,
  selectedDate,
}) => {
  const { sendRequest } = useHttp();
  const { id, isDone, content } = item;

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [content]);

  const handleBlur = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      const filteredTodoList = selectedTodoList[0].todo_items.filter(
        (todo) => todo.content !== ""
      );

      const newSelectedTodoList = {
        date: selectedTodoList[0].date,
        todo_items: [...filteredTodoList],
      };
      onSelectedTodoList([newSelectedTodoList]);
    } else {
      item.content = value;
      const spreadSelectedTodoList = JSON.parse(
        JSON.stringify(selectedTodoList)
      );

      onSelectedTodoList(spreadSelectedTodoList);
      postTodoItem(item);
    }
  };
  const postTodoItem = async (item) => {
    await sendRequest({
      url: `api/todo/`,
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: {
        date: parseDateToString(selectedDate),
        todo_items: [{ content: item.content, is_done: false }],
      },
    });
  };

  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox size={"2rem"} color={"#735bf2"} />
  ) : (
    <MdOutlineCheckBoxOutlineBlank size={"2rem"} color={"#735bf2"} />
  );

  return (
    <div
      className={styles.item}
      onClick={() => {
        setIsDone(!isDone);
      }}
      style={{ background: "#fff" }}
    >
      {content ? (
        <>
          <div className={styles.left}>
            {isDoneIcon}
            <span className={styles.content}>{content}</span>
          </div>
          <HiOutlineTrash size={"2rem"} />
        </>
      ) : (
        <input ref={inputRef} onBlur={handleBlur} />
      )}
    </div>
  );
};

export default TodoItem;
