import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import useHttp from "@hooks/useHttp";
import CalendarBox from "@components/CalendarBox";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton";

import { IoIosShareAlt } from "react-icons/Io";
import FooterNav from "@components/FooterNav";
import LoginModal from "@components/LoginModal";

const HomePage = () => {
  const [dotDates, setDotDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTodoList, setSelectedTodoList] = useState([]);

  const [isLogin, setIsLogin] = useState(true);

  const { sendRequest: getDotDates } = useHttp(setDotDates);
  const { sendRequest: getSelectedTodoList } = useHttp(setSelectedTodoList);

  useEffect(() => {
    getSelectedTodoList({
      url: `api/todo/?date=${parseDateToString(selectedDate)}`,
    });
  }, [selectedDate]);

  useEffect(() => {
    getDotDates({
      url: `api/dotdates`,
    });
  }, [selectedTodoList]);

  return (
    <div className={styles.container}>
      {/* {isLogin && <LoginModal onConfirm={onConfirm} />} */}
      <div className={styles["logo-wrap"]}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
      <CalendarBox
        dotDates={dotDates}
        selectedDate={selectedDate}
        onSelectedDate={setSelectedDate}
      />
      <div className={styles["share-box"]}>
        <IoIosShareAlt size={"2em"} color={"#d9d9d9"} />
      </div>
      <TodoList
        selectedTodoList={selectedTodoList}
        setSelectedTodoList={setSelectedTodoList}
        selectedDate={selectedDate}
      />
      {/* <AddButton
        selectedTodoList={selectedTodoList}
        onAddItem={setSelectedTodoList}
      /> */}
      <FooterNav
        selectedTodoList={selectedTodoList}
        onAddItem={setSelectedTodoList}
      />
    </div>
  );
};

export default HomePage;
