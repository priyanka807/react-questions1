import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";


const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date()); // Today's date
  const [endDate, setEndDate] = useState(null); // End date
console.log(startDate,'startDate')
console.log(setEndDate,'setEndDate')
  return (
    <div className="datepicker-container">
      <DatePicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()} // Start from today
        maxDate={addMonths(new Date(), 6)} // Show only next 6 months
        inline
      />
    </div>
  );
};

export default DatePickerComponent;
