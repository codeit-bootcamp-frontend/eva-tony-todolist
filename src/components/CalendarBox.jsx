import React, { useState } from "react";
import Calendar from "react-calendar";
import "@components/CalendarBox.css";
import dummyData from "@data/dummyData";
import moment from "moment";

const CalendarBox = ({ date: mockdate }) => {
  // const [mark, setMark] = useState(mockdate);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar
        onChange={onChange}
        formatDay={(date) => moment(date).format("DD")}
        value={value}
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date }) => {
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
    </>
  );
};

export default CalendarBox;
