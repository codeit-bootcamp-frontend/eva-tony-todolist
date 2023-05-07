import React, { useRef, useEffect, useState } from 'react';
import useHttp from '@hooks/useHttp';
import styles from '@components/TodoItem.module.css';
import parseDateToString from '@library/parseDateToString';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';

import { HiOutlineTrash } from 'react-icons/hi';

const TodoItem = ({
  item,
  onSelectedTodoList,
  selectedTodoList,
  selectedDate,
}) => {
  const { sendRequest } = useHttp(onSelectedTodoList);
  const { sendRequest: putIsDone } = useHttp();

  const { id, is_done, content } = item;
  const [isDone, setIsDone] = useState(is_done);

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [content]);

  const handleBlur = (event) => {
    const { value } = event.target;
    if (value.trim() === '') {
      const filteredTodoList = selectedTodoList.filter(
        (todo) => todo.content !== ''
      );

      onSelectedTodoList([...filteredTodoList]);
    } else {
      item.content = value;

      onSelectedTodoList([...selectedTodoList]);
      const response = postTodoItem(item);
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const { value } = event.target;
      if (value.trim() === '') {
        const filteredTodoList = selectedTodoList.filter(
          (todo) => todo.content !== ''
        );

        onSelectedTodoList([...filteredTodoList]);
      } else {
        item.content = value;

        onSelectedTodoList([...selectedTodoList]);
        const response = postTodoItem(item);
      }
    }
    return;
  };

  const postTodoItem = async (item) => {
    await sendRequest({
      url: `api/todo/`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: {
        date: parseDateToString(selectedDate),
        todo_items: [{ content: item.content, is_done: false }],
      },
    });
  };

  const isDoneIcon = isDone ? (
    <MdOutlineCheckBox
      className={styles.checkbox}
      size={'2rem'}
      color={'#735bf2'}
      onClick={() => {
        setIsDone(!isDone);
        sendIsDone();
      }}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      size={'2rem'}
      color={'#735bf2'}
      onClick={() => {
        setIsDone(!isDone);
        sendIsDone();
      }}
    />
  );

  const sendIsDone = () => {
    putIsDone({
      url: `api/todo/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: {
        is_done: isDone,
      },
    });
  };

  return (
    <div className={styles.item} style={{ background: '#fff' }}>
      {content ? (
        <>
          <div className={styles.left}>
            {isDoneIcon}
            <span className={styles.content}>{content}</span>
          </div>
          <HiOutlineTrash size={'1.6rem'} color={'var(--primary-color)'} />
        </>
      ) : (
        <input
          className={styles.input}
          ref={inputRef}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
          placeholder="할 일을 입력해주세요."
        />
      )}
    </div>
  );
};

export default TodoItem;
