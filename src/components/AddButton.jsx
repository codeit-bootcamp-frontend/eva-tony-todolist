import React, { useRef } from 'react';
import styles from '@components/AddButton.module.css';

const AddButton = ({ selectedTodoList, onAddItem }) => {
  const handleClick = () => {
    const newItem = {
      id: new Date().getTime(), // 임시적으로 사용하는 id
      isDone: false,
      content: '',
    };
    if (selectedTodoList) {
      onAddItem([newItem, ...selectedTodoList]);
    } else {
      onAddItem(['', ...selectedTodoList]);
    }
  };

  return (
    <div className={styles['button-box']} onClick={handleClick}>
      <button className={styles.button}>+</button>
    </div>
  );
};

export default AddButton;
