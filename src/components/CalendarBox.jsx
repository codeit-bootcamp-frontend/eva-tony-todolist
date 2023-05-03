import React from "react";
import Calendar from "react-calendar";
import "@components/CalendarBox.css";
import moment from "moment";

const CalendarBox = ({ dateList: mockdate, selectedDate, onChange }) => {
  console.log("목데이트", mockdate);
  return (
    <>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={selectedDate}
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
      {moment(selectedDate).format("YYYY-MM-DD")}
    </>
  );
};

export default CalendarBox;
