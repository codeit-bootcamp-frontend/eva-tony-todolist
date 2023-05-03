import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <p>{item.isDone}</p>
      <p>{item.content}</p>
    </div>
  );
};

export default TodoItem;
