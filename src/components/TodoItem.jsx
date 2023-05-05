import React, { useRef, useEffect } from "react";
import useHttp from "@hooks/useHttp";
import parseDateToString from "@library/parseDateToString";

const TodoItem = ({
  item,
  dayKey,
  setDayKey,
  onSelectedTodoList,
  selectedTodoList,
  selectedDate,
}) => {
  const { postIdRef: todoId, sendRequest } = useHttp();
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
      const newSelectedTodoList = selectedTodoList.filter(
        (todo) => todo !== item
      );
      onSelectedTodoList(newSelectedTodoList);
    } else {
      item.content = value;
      const spreadSelectedTodoList = JSON.parse(
        JSON.stringify(selectedTodoList)
      );

      onSelectedTodoList(spreadSelectedTodoList);
      postTodoItem(dayKey, item);
    }
  };

  const postTodoItem = async (dayKey, item) => {
    if (dayKey) {
      console.log(selectedDate, "selectedDate");
      console.log(dayKey, "dayKey");
      await sendRequest({
        url: `https://todolist-aaf92-default-rtdb.firebaseio.com/todoList/${dayKey}/todo.json`,
        header: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          isDone: false,
          content: inputRef.current.value,
        },
      });
    }
  };

  return (
    <div>
      {content ? (
        <p style={{ border: "1px solid black", backgroundColor: "red" }}>
          {content}
        </p>
      ) : (
        <input
          ref={inputRef}
          onBlur={handleBlur}
          style={{ backgroundColor: "red" }}
        />
      )}
    </div>
  );
};

export default TodoItem;
