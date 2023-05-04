import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import CalendarBox from "@components/CalendarBox";
import useHttp from "@hooks/useHttp";
import TodoList from "@components/TodoList";
import parseDateToString from "@library/parseDateToString";
import AddButton from "@components/AddButton";
import dummyData from "@data/dummyData.json";
import { initialSetData } from "@data/initialSetData";

const HomePage = () => {
  const [dateList, setDateList] = useState([]);
  const { isLoading, error, sendRequest: getItem } = useHttp(setDateList);
  const [dotDates, setDotDates] = useState();

  useEffect(() => {
    getItem({ url: "http://localhost:4000/post" });
  }, []);

  // dot 관련 메소드. dot에 들어갈 date를 배열로 만든다
  const getDate = () => {
    setDotDates(dateList.map((item) => item.date));
  };

  // api에서 받아온 dateList가 변할때 마다 getDate로 배열 생성
  useEffect(() => {
    getDate();
  }, [dateList]);

  return (
    <div className={styles.container}>
      <div className={styles["logo-wrap"]}>
        <img className={styles.logo} src={CodoitLogo} />
      </div>
    </div>
  );
};

export default HomePage;
