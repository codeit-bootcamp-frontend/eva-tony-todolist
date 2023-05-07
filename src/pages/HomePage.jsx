import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.svg";
import styles from "@pages/HomePage.module.css";
import useHttp from "@hooks/useHttp";
import CalendarBox from "@components/CalendarBox";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton";

import { IoIosShareAlt } from "react-icons/io";
import FooterNav from "@components/FooterNav";
import LoginModal from "@components/LoginModal";

const HomePage = () => {
  const [dotDates, setDotDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTodoList, setSelectedTodoList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { sendRequest: getDotDates } = useHttp(setDotDates);
  const { sendRequest: getSelectedTodoList } = useHttp(setSelectedTodoList);

  useEffect(() => {
    getSelectedTodoList({
      url: `api/todo/?date=${parseDateToString(selectedDate)}`,
    });
  }, [selectedDate]);

  useEffect(() => {
    getDotDates({
      url: `api/dotdates/`,
    });
  }, [selectedTodoList]);

  const onConfirm = () => {
    setIsLoggedIn(true);
  };

  const handleClickWithOutAuth = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.container}>
      {!isLoggedIn && !localStorage.getItem("accessToken") && (
        <LoginModal onConfirm={onConfirm} />
      )}
      <div onClick={handleClickWithOutAuth}>
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
          onSelectedTodoList={setSelectedTodoList}
          selectedDate={selectedDate}
          getDotDates={getDotDates}
        />
        <div className={styles["button-box"]}>
          <AddButton
            selectedTodoList={selectedTodoList}
            onAddItem={setSelectedTodoList}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
