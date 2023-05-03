import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import CalendarBox from "@components/CalendarBox";
import useFetchData from "@hooks/useFetchData";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton";

const HomePage = () => {
  const { data, isLoading, error } = useFetchData("/src/data/dummyData.json");
  const [dateList, setDateList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // 오늘값
  const [selectedDateTodoList, setSelectedDateTodoList] = useState();
  console.log(data, dateList, selectedDate, selectedDateTodoList);

  useEffect(() => {
    getDate();
  }, [data]);

  useEffect(() => {
    filteredTodoList();
    console.log(selectedDate);
  }, [selectedDate, data]);

  const getDate = () => {
    setDateList(data.map((item) => item.date));
  };

  const filteredTodoList = () => {
    const currentDateString = parseDateToString(selectedDate);
    const filteredTodoData = data.find(
      (item) => item.date === currentDateString
    );
    setSelectedDateTodoList(filteredTodoData);
  };

  return (
    <div className={styles.container}>
      <div className={styles["logo-wrap"]}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
      <CalendarBox
        dateList={dateList}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <TodoList selectedDate={selectedDate} data={selectedDateTodoList} />
      <AddButton onAddItem={setSelectedDateTodoList} />
    </div>
  );
};

export default HomePage;
