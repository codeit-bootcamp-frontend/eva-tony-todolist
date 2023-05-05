import React, { useEffect, useState, useCallback } from 'react';

import 'react-calendar/dist/Calendar.css';
import CodoitLogo from '@assets/codoit-logo.png';
import styles from '@pages/HomePage.module.css';
import useHttp from '@hooks/useHttp';
import CalendarBox from '@components/CalendarBox';
import TodoList from '@components/TodoList';
import parseDateToString from '@library/parseDateToString';
import AddButton from '@components/AddButton';

import { IoIosShareAlt } from 'react-icons/Io';
import FooterNav from '../components/FooterNav';

const HomePage = () => {
  const { data: dataList, isLoading, error, sendRequest } = useHttp();
  const [dotDates, setDotDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTodoList, setSelectedTodoList] = useState([]);
  const [dayKey, setDayKey] = useState('');

  useEffect(() => {
    sendRequest({
      url: 'https://todolist-aaf92-default-rtdb.firebaseio.com/todoList.json',
    });
  }, [selectedDate]);

  const getDate = () => {
    let temp = dataList.map((item) => item.date);
    setDotDates([...temp]);
  };

  // api에서 받아온 dataList가 변할때 마다 getDate로 배열 생성
  useEffect(() => {
    getDate();
  }, [dataList, selectedTodoList.length]);

  // seletedDate가 설정될 때마다 해당 날짜의 todoList를 setSeletecedTodoList를 해준다.
  // 최초 dataList가 fetch되었을 때도 set된다.
  const filteredTodoList = () => {
    if (!selectedDate) return;
    const currentDateString = parseDateToString(selectedDate);

    let filteredTodoData = dataList?.find((item) => {
      setDayKey(item.id);
      return item.date === currentDateString;
    });

    if (!filteredTodoData) setDayKey('');

    return filteredTodoData ? filteredTodoData.todo : [];
  };

  useEffect(() => {
    const temp = filteredTodoList();
    setSelectedTodoList([...temp]);
  }, [selectedDate, dataList]);

  return (
    <div className={styles.container}>
      <div className={styles['logo-wrap']}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
      <CalendarBox
        dotDates={dotDates}
        selectedDate={selectedDate}
        onSelectedDate={setSelectedDate}
      />
      <div className={styles['share-box']}>
        <IoIosShareAlt size={'2em'} color={'#d9d9d9'} />
      </div>
      <TodoList
        selectedTodoList={selectedTodoList}
        setSelectedTodoList={setSelectedTodoList}
        dayKey={dayKey}
        setDayKey={setDayKey}
        selectedDate={selectedDate}
      />
      {/* <AddButton
        selectedTodoList={selectedTodoList}
        onAddItem={setSelectedTodoList}
      /> */}
      <FooterNav />
    </div>
  );
};

export default HomePage;
