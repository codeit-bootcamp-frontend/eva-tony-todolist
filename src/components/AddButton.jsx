import React from "react";

const AddButton = ({ onAddItem }) => {
  const handleClick = () => {
    const newItem = "";
    onAddItem((prev) => [newItem, ...prev]);
  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default AddButton;
