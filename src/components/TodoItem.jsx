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
  const { sendRequest } = useHttp(onSelectedTodoList);
  const { sendRequest: putIsDone } = useHttp();

  const { id, is_done, content } = item;
  const [isDone, setIsDone] = useState(is_done);
  console.log(is_done);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [content]);

  const handleBlur = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      const filteredTodoList = selectedTodoList.filter(
        (todo) => todo.content !== ""
      );

      // const newSelectedTodoList = {
      //   date: selectedDate,
      //   todo_items: [...filteredTodoList],
      // };
      onSelectedTodoList([...filteredTodoList]);
    } else {
      item.content = value;
      // const spreadSelectedTodoList = JSON.parse(
      //   JSON.stringify(selectedTodoList)
      // );

      // onSelectedTodoList(spreadSelectedTodoList);
      onSelectedTodoList([...selectedTodoList]);
      console.log(item);
      const response = postTodoItem(item);
      console.log(response);
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

  const sendIsDone = () => {
    putIsDone({
      url: `api/todo/${id}/`,
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: {
        is_done: isDone,
      },
    });
  };

  return (
    <div
      className={styles.item}
      onClick={() => {
        setIsDone(!isDone);
        sendIsDone();
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
