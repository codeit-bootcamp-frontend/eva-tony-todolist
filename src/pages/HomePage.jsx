import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import useHttp from "@hooks/useHttp";
import CalendarBox from "@components/CalendarBox";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton";

const HomePage = () => {
  const { data: dateList, isLoading, error, sendRequest } = useHttp();
  const [dotDates, setDotDates] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTodoList, setSelectedTodoList] = useState([]);

  // console.log(parseDateToString(new Date()));

  useEffect(() => {
    sendRequest({
      url: "https://todolist-aaf92-default-rtdb.firebaseio.com/todoList.json",
    });
  }, []);

  const getDate = () => {
    setDotDates(dateList.map((item) => item.date));
  };

  // api에서 받아온 dateList가 변할때 마다 getDate로 배열 생성
  useEffect(() => {
    getDate();
  }, [dateList]);

  // seletedDate가 설정될 때마다 해당 날짜의 todoList를 setSeletecedTodoList를 해준다.
  // 최초 dateList가 fetch되었을 때도 set된다.

  const filteredTodoList = () => {
    if (!selectedDate) return;
    const currentDateString = parseDateToString(selectedDate);
    const filteredTodoData = dateList?.find(
      (item) => item.date === currentDateString
    );
    return filteredTodoData?.todo;
  };

  useEffect(() => {
    const temp = filteredTodoList();
    temp ? setSelectedTodoList(temp) : setSelectedTodoList([]);
  }, [selectedDate, dateList]);

  return (
    <div className={styles.container}>
      <div className={styles["logo-wrap"]}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
      <CalendarBox
        dotDates={dotDates}
        selectedDate={selectedDate}
        onSelectedDate={setSelectedDate}
      />
      <TodoList
        selectedTodoList={selectedTodoList}
        setSelectedTodoList={setSelectedTodoList}
      />
      <AddButton
        selectedTodoList={selectedTodoList}
        onAddItem={setSelectedTodoList}
      />
    </div>
  );
};

export default HomePage;
