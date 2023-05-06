import React from 'react';
import styles from '@components/Todolist.module.css';
import TodoItem from '@components/TodoItem';
import SwipeToDeleteComponent from 'react-swipe-to-delete-component';

const TodoList = ({
  dayKey,
  setDayKey,
  selectedTodoList,
  setSelectedTodoList,
  selectedDate,
}) => {
  return (
    <div className={styles['todolist-container']}>
      {/* {selectedTodoList?.map((item) => (
        <SwipeToDeleteComponent key={item.id}>
          <TodoItem
            key={item.id}
            dayKey={dayKey}
            setDayKey={setDayKey}
            item={item}
            onSelectedTodoList={setSelectedTodoList}
            selectedTodoList={selectedTodoList}
            selectedDate={selectedDate}
          />
        </SwipeToDeleteComponent>
      ))} */}
      {list}
    </div>
  );
};

export default TodoList;
