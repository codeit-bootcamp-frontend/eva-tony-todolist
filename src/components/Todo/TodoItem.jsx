import { useRef, useEffect, useState } from "react";
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
  }, [item.content, update]);

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


  const updateItemContent = (value, response) => {
    setContent(value)
    setUpdate(false)
    onSelectedTodoList(response) //TODO : 서버에서 전체를 주기 때문에 이렇게 구현
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
       updateItemContent(value, response)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(()=> {
    putIsDone();

  }, [isDone])

  const putIsDone = async () => {
    await sendRequest({
      url: `api/todo/${item.id}/`,
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: {
        content: content,
        is_done: isDone,
      },
    });

    setUpdate(false) 
   };

   const handleIsDoneClick = (e) => {
    e.stopPropagation();
    setIsDone(!isDone);
  }

  const updateItem = () => {
    setContent("")
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

      item.content = inputRef.current.value
      setContent(inputRef.current.value)
      setUpdate(false) 
     };




  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox
      className={styles.checkbox}
      size={"2rem"}
      color={"#735bf2"}
      onClick={handleIsDoneClick}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      size={"2rem"}
      color={"#735bf2"}
      onClick={handleIsDoneClick}
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
            defaultValue={item.content}
          />
        </form>
      )}
    </div>
  );
};

export default TodoItem;
