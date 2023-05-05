import React, { useRef, useEffect, useState } from 'react';
import useHttp from '@hooks/useHttp';
import styles from '@components/TodoItem.module.css';
import parseDateToString from '@library/parseDateToString';

import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/Md';

import { HiOutlineTrash } from 'react-icons/Hi';

const TodoItem = ({
  item,
  dayKey,
  setDayKey,
  onSelectedTodoList,
  selectedTodoList,
  selectedDate,
}) => {
  const { postIdRef: todoId, sendRequest } = useHttp();
  const { id, content } = item;

  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [content]);

  const handleBlur = (event) => {
    const { value } = event.target;
    if (value.trim() === '') {
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
      console.log(selectedDate, 'selectedDate');
      console.log(dayKey, 'dayKey');
      await sendRequest({
        url: `https://todolist-aaf92-default-rtdb.firebaseio.com/todoList/${dayKey}/todo.json`,
        header: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: {
          isDone: false,
          content: inputRef.current.value,
        },
      });
    }
  };

  const [isDone, setIsDone] = useState(false);

  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox size={'2rem'} color={'#735bf2'} />
  ) : (
    <MdOutlineCheckBoxOutlineBlank size={'2rem'} color={'#735bf2'} />
  );

  const temp = content ? (
    <p>{content}</p>
  ) : (
    <input ref={inputRef} onBlur={handleBlur} />
  );

  return (
    <div
      onClick={() => {
        setIsDone(!isDone);
      }}
      className={styles.item}
    >
      <div className={styles.left}>
        {isDoneIcon}
        <span className={styles.content}>{content}</span>
      </div>
      <HiOutlineTrash size={'2rem'} />
    </div>
  );
};

export default TodoItem;
