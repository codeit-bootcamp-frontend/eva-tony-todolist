import React from "react";
import Calendar from "react-calendar";
import "@components/CalendarBox.css";
import moment from "moment";

const CalendarBox = ({ date: mockdate, currentDate, onChange }) => {
  return (
    <>
      {console.log(typeof onChange)}
      <Calendar
        onChange={onChange}
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
