import React, { useEffect, useState, useCallback } from "react";

import "react-calendar/dist/Calendar.css";
import CodoitLogo from "@assets/codoit-logo.png";
import styles from "@pages/HomePage.module.css";
import CalendarBox from "@components/CalendarBox";
import useFetchData from "@hooks/useFetchData";

const HomePage = () => {
  const { data, isLoading, error } = useFetchData("/src/data/dummyData.json");
  const [date, setDate] = useState([]);

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    getDate();
  }, [data]);

  const getDate = () => {
    setDate(data.map((item) => item.date));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles["logo-wrap"]}>
          <img className={styles.logo} src={CodoitLogo} />
        </div>
        <CalendarBox date={date} />
      </div>
    </>
  );
};

export default HomePage;
