import React from 'react';
import styles from '@components/Todolist.module.css';
import TodoItem from '@components/TodoItem';

// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';
// // Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import useHttp from '@hooks/useHttp';
import parseDateToString from '@library/parseDateToString';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
const TodoList = ({
  selectedTodoList,
  onSelectedTodoList,
  selectedDate,
  getDotDates,
}) => {
  const { sendRequest: deleteItem } = useHttp();

  const todoItemDeleteHanlder = (item) => {
    return () => {
      const filteredTodoList = selectedTodoList.filter(
        (todo) => todo.content !== item
      );

      onSelectedTodoList(filteredTodoList);
      return deleteItem({ url: `api/todo/${item.id}`, method: 'DELETE' });
    };
  };

  const handleChange = (result) => {
    if (!result.destination) return;
    const items = [...selectedTodoList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onSelectedTodoList(items);
  };

  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            className="todoList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className={styles['todolist-container']}>
              {selectedTodoList.map((item, index) => (
                <Draggable
                  draggableId={String(item.id)}
                  key={String(item.id)}
                  index={index}
                  restrictions={{ start: 0, end: 0 }}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <SwipeToDelete
                          key={item.id ? item.id : new Date().getTime()}
                          onDelete={todoItemDeleteHanlder(item)}
                        >
                          <TodoItem
                            key={item.id ? item.id : new Date().getTime()}
                            item={item}
                            onSelectedTodoList={onSelectedTodoList}
                            selectedTodoList={selectedTodoList}
                            selectedDate={selectedDate}
                          />
                        </SwipeToDelete>
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
