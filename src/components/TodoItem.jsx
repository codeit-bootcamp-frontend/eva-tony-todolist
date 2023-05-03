import React from "react";

const TodoItem = ({ item }) => {
  const { isDone, content } = item;
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default TodoItem;
