import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import CalendarBox from "@components/CalendarBox";
import useFetchData from "@hooks/useFetchData";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";

const HomePage = () => {
  const { data, isLoading, error } = useFetchData("/src/data/dummyData.json");
  const [date, setDate] = useState([]);

  const [currentDate, onChange] = useState(new Date());

  useEffect(() => {
    getDate();
  }, [data]);

  const getDate = () => {
    setDate(data.map((item) => item.date));
  };

  const filteredTodoList = () => {
    const currentDateString = parseDateToString(currentDate);
    return data.find((item) => item.date === currentDateString);
  };

  return (
    <div className={styles.container}>
      <div className={styles["logo-wrap"]}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
      <CalendarBox date={date} currentDate={currentDate} onChange={onChange} />
      <TodoList currentDate={currentDate} data={filteredTodoList()} />
    </div>
  );
};

export default HomePage;
