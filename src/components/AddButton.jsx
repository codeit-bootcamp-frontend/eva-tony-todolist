import React, { useRef } from "react";

const AddButton = ({ selectedDay, onAddItem, flag }) => {
  const length = selectedDay?.todo?.length;
  let todoItemId = useRef(length);

  const handleClick = () => {
    todoItemId.current++;
    const newItem = {
      id: todoItemId.current,
      isDone: false,
      content: "",
    };

    // onAddItem([newItem, ...selectedDateTodoList]);
    // onAddItem([newItem, ...selectedDay]);
    onAddItem((prevState) => ({
      ...prevState,
      todo: [...prevState.todo, newItem],
    }));
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default AddButton;
