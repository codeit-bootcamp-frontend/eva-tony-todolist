import React, { useRef, useEffect } from "react";

const TodoItem = ({ item, onSelectedTodoList, selectedTodoList }) => {
  const { isDone, content } = item;
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [content]);

  const handleBlur = (event) => {
    const { value } = event.target;
    onSelectedTodoList((prev) => [value, ...prev]);
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
