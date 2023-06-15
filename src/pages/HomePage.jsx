import{ useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import styles from "@pages/HomePage.module.css";
import useHttp from "@hooks/useHttp";
import CalendarBox from "@components/Calendar/CalendarBox";
import TodoList from "@components/Todo/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton/AddButton";

import { IoIosShareAlt } from "react-icons/Io";
import LoginModal from "@components/LoginModal/LoginModal";

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { data:dotDates } = useHttp({
    url: `api/dotdates/`,
  });

  const { data: selectedTodoList, setData: setSelectedTodoList } = useHttp({
    url: `api/todo/?date=${parseDateToString(selectedDate)}`,
  });

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
