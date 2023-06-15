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
  const { sendRequest: putContent } = useSendRequest(); // setter가 매개변수로 없음
  const { sendRequest: putIsDone } = useSendRequest(); // setter가 매개변수로 없음
  const [isDone, setIsDone] = useState(item.is_done);
  const [content2, setContent] = useState(item.content)
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


  const putTodoItem = async () => {
    await putContent({
      url: `api/todo/${item.id}/`,
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
        e.stopPropagation();
        setIsDone(!isDone);
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
      url: `api/todo/${item.id}/`,
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: {
        is_done: isDone,
        content : content
      },
    });
  };

  const updateItem = () => {
    item.content = "";
    let findItem = selectedTodoList?.find((selectedTodo) => selectedTodo.id === item.id);
    findItem.content = inputRef?.current?.value;
    onSelectedTodoList([...selectedTodoList]);
    setUpdate(true);
  };

  return (
    <div className={styles.item} style={{ background: "#fff" }}>
      {content2 ? (
        <>
          <div className={styles.left}>
            {isDoneIcon}
            {!isDone ? (
              <span className={styles.content}>{content2}</span>
            ) : (
              <span className={styles["is-done"]}>{content2}</span>
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
