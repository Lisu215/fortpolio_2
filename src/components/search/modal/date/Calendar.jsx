import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { ko } from "date-fns/locale";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChangeStart = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <SDatePicker
        locale={ko}
        selected={startDate}
        onChange={handleChangeStart}
        dateFormat="yyyy년 MM월 dd일"
        withPortal
      />
    </div>
  );
};

export default Calendar;

const SDatePicker = styled(DatePicker)`
  position: absolute;
  margin-top: -20px;
  right: 21rem;
  top: 0.9rem;
  text-align: center;
  z-index: 1;
  cursor: pointer;
`;
