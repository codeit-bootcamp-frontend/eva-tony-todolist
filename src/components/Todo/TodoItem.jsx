import { useRef, useEffect, useState } from "react";
import useSendRequest from "@hooks/useSendRequest";
import styles from "@components/Todo/TodoItem.module.css";
import parseDateToString from "@library/parseDateToString";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import { SlPencil } from "react-icons/Sl";
import sendRequest from "@library/sendRequest";
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
  const [isDone, setIsDone] = useState(item.is_done);
  const [content, setContent] = useState(item.content)
  const [update, setUpdate] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [item.content]);

  const handleBlurAndSubmit = (event) => {
    event.preventDefault()
    const { value } = inputRef.current;
    if (value.trim() === "") {
      const filteredTodoList = selectedTodoList.filter(
        (todo) => todo.content !== ""
      );

      onSelectedTodoList([...filteredTodoList]);
    } else {
      if (!update) {
        postTodoItem(value);
      } else {
        putTodoItem();
      }
    }
  };

  const updateItemContent = (value) => {
    setContent(value)
  }

  const postTodoItem = async (value) => {
    try {
     const response = await sendRequest({
        url: `api/todo/`,
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          date: parseDateToString(selectedDate),
          todo_items: [{ content: value, is_done: false }],
        },
      });
       updateItemContent(value)
    } catch(err) {
      console.log(err)
    }
  };


  const updateItem = () => {
    setContent("")
    console.log(item)
    let findItem = selectedTodoList?.find((selectedTodo) => selectedTodo.id === item.id);
    findItem.content = inputRef?.current?.value;
    onSelectedTodoList([...selectedTodoList]);
    setUpdate(true);
  };

  const putTodoItem = async () => {
      await sendRequest({
        url: `api/todo/${item.id}/`,
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: {
          content: inputRef.current.value,
          is_done: isDone,
        },
      });
      updateItemContent(inputRef.current.value)
  };


  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox
      className={styles.checkbox}
      size={"2rem"}
      color={"#735bf2"}
      onClick={(e) => {
        e.stopPropagation();
        setIsDone(!isDone);
        putIsDone();
      }}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      size={"2rem"}
      color={"#735bf2"}
      onClick={(e) => {
        e.stopPropagation();
        setIsDone(!isDone);
        putIsDone();
      }}
    />
  );



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
        <form  onSubmit={handleBlurAndSubmit}>
          <input
            className={styles.input}
            ref={inputRef}
            onBlur={handleBlurAndSubmit} 
            placeholder="할 일을 입력해주세요."
          />
        </form>
      )}
    </div>
  );
};

export default TodoItem;
