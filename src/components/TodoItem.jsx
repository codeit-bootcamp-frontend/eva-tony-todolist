import React, { useRef, useEffect, useState } from "react";
import useHttp from "@hooks/useHttp";
import styles from "@components/TodoItem.module.css";
import parseDateToString from "@library/parseDateToString";
// Import styles of the react-swipe-to-delete-component
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import { SlPencil } from "react-icons/Sl";

import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/Md";

const TodoItem = ({
  item,
  onSelectedTodoList,
  selectedTodoList,
  selectedDate,
}) => {
  const { sendRequest } = useHttp(onSelectedTodoList);
  const { sendRequest: putIsDone } = useHttp();

  let { id, is_done, content } = item;
  const [isDone, setIsDone] = useState(is_done);
  const [update, setUpdate] = useState(false);

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

      onSelectedTodoList([...filteredTodoList]);
    } else {
      item.content = value;

      onSelectedTodoList([...selectedTodoList]);
      if (!update) {
        postTodoItem(item);
      } else {
        putTodoItem();
      }
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const { value } = event.target;
      if (value.trim() === "") {
        const filteredTodoList = selectedTodoList.filter(
          (todo) => todo.content !== ""
        );

        onSelectedTodoList([...filteredTodoList]);
      } else {
        item.content = value;

        onSelectedTodoList([...selectedTodoList]);
        if (!update) {
          postTodoItem(item);
        } else {
          putTodoItem();
        }
      }
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

  const putTodoItem = async () => {
    await putIsDone({
      url: `api/todo/${id}/`,
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: {
        content: inputRef.current.value,
      },
    });
  };

  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox
      className={styles.checkbox}
      size={"2rem"}
      color={"#735bf2"}
      onClick={(e) => {
        setIsDone(!isDone);
        e.stopPropagation();
        sendIsDone();
      }}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      size={"2rem"}
      color={"#735bf2"}
      onClick={(e) => {
        e.stopPropagation();
        setIsDone(!isDone);
        sendIsDone();
      }}
    />
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

  const updateItem = () => {
    content = "";
    let findItem = selectedTodoList?.find((item) => item.id === id);
    findItem.content = inputRef?.current?.value;
    onSelectedTodoList([...selectedTodoList]);
    setUpdate(true);
  };

  return (
    <div className={styles.item} style={{ background: "#fff" }}>
      {content ? (
        <>
          <div className={styles.left}>
            {isDoneIcon}
            {!isDone ? (
              <span className={styles.content}>{content}</span>
            ) : (
              <span className={styles["is-done"]}>{content}</span>
            )}
          </div>
          <SlPencil
            onClick={updateItem}
            size={"1.6rem"}
            color={"var(--primary-color)"}
          />
        </>
      ) : (
        <input
          className={styles.input}
          ref={inputRef}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
          placeholder="할 일을 입력해주세요."
        />
      )}
    </div>
  );
};

export default TodoItem;
