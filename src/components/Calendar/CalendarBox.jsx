import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";
import "@components/Calendar/CalendarBox.css";
import "@components/Calendar/Calendar.css";
import moment from "moment";

const CalendarBox = ({ dotDates, selectedDate, onSelectedDate }) => {
  return (
    <>
      <Calendar
        view="month"
        onChange={onSelectedDate}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={selectedDate}
        calendarType="US"
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (dotDates?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
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
    </>
  );
};

export default CalendarBox;
