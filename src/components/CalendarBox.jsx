import React, { useState, useCallback } from "react";
import Calendar from "react-calendar";
import "@components/CalendarBox.css";
import dummyData from "@data/dummyData";
import moment from "moment";

const CalendarBox = ({ date: mockdate, currentDate, onChange }) => {
  const handleDateChange = useCallback((date) => {
    // 왜 props로 받아온 setter를 함수로 감싸서 props로 넘겨야하는지?
    onChange(date);
  }, []);
  return (
    <>
      <Calendar
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={currentDate}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (mockdate.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot"></div>
                </div>
              </>
            );
          }
        }}
      />
      {moment(currentDate).format("YYYY-MM-DD")}
    </>
  );
};

export default CalendarBox;
