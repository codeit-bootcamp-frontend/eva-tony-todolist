import React from "react";

const TodoItem = ({ item }) => {
  const { isDone, content } = item;
  return (
    <div>
      <p style={{ border: "1px solid black" }}>{content}</p>
    </div>
  );
};

export default TodoItem;
