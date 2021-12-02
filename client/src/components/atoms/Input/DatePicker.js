import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko"

import "react-datepicker/dist/react-datepicker.css";

export default function SignupInputBox({ width = 20, height = 3 }) {
  const [selectDate, setSelectDate] = useState(new Date());

  const getDayName = (date) => {
    return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
  };

  const createDate = (date) => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <DayCustom date={date} selectDate={selectDate} title={tooltipText}>
        {date.getDate()}
      </DayCustom>
    );
  };
  
  console.log("date:", selectDate);
  return (
    <Container width={width}>
      <InputTitle height={height}>생년월일</InputTitle>
      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        showPopperArrow={false}
        fixedHeight
        selected={selectDate}
        onChange={(date) => setSelectDate(date)}
        width={width}
        height={height}
        renderDayContents={renderDayContents}
        disabledKeyboardNavigation
        // readOnly={true}
      />
    </Container>
  );
}

const Container = styled.div`
`;

const StyledDatePicker = styled(DatePicker)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  margin: 0.5rem 0 0.2rem 0;
  padding: ${({ height }) => `${height * 0.08}rem`};
  font-size: ${({ height }) => `${(height * 2) / 3}rem`};
  font-family: ${({ theme }) => theme.fontFamily.jua};
  border: 1px solid black; 
`;

const InputTitle = styled.div`
  margin-top: ${({ height }) => `${height / 5}rem`};
  font-size: ${({ height }) => `${height / 2}rem`};
  font-family: ${({ theme }) => theme.fontFamily.blackHanSans};
`;

const DayCustom = styled.span`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.3rem;
  color: ${({ selectDate, date }) => (selectDate === date ? "white" : "black")};
  background-color: ${({ selectDate, date }) =>
    selectDate === date ? "black" : "yellow"};
`;