import React from "react";
import Calendar from "react-calendar";
import "@components/CalendarBox.css";
import moment from "moment";

const CalendarBox = ({ dotDates, selectedDate, onSelectedDate }) => {
  return (
    <>
      <Calendar
        onChange={onSelectedDate}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={selectedDate}
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
      {moment(selectedDate).format("YYYY-MM-DD")}
    </>
  );
};

export default CalendarBox;
