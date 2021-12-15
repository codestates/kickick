import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import disableScroll from "disable-scroll";

import "react-datepicker/dist/react-datepicker.css";

import { getLogs } from "../../../apis/logs"

export default function Calendar() {
  const navigate = useNavigate();
  const [attendance,setAttendance] = useState([])

  useEffect(() => {
    getLogs("signin", 30, 1).then((res) => {
      setAttendance(
        res.data.data
          .filter(
            (el) =>
              Number(el.created_at.split("-")[1]) ===
              Number(new Date().getMonth() + 1)
          )
          .map((el) => new Date(el.created_at))
      );
    });
  },[]);

  const closer = () => {
    disableScroll.off();
    navigate("/", { replace: true });
  }

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{day}</span>;
  };

  return (
    <Container onClick={closer}>
      <Title>12월 출석판</Title>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        renderDayContents={renderDayContents}
        showPopperArrow={false}
        highlightDates={attendance}
        disabledKeyboardNavigation
        inline
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vw;
  border-radius: 1vw;
  font-family: ${({ theme }) => theme.fontFamily.jua};
  background-color: white;
  cursor: pointer;

  .react-datepicker {
    border: none;
  }

  .react-datepicker__header {
    padding: 0.3vw;
    background-color: white;
  }

  .react-datepicker__current-month,
  .react-datepicker__navigation--next,
  .react-datepicker__navigation--previous {
    display: none;
  }

  .react-datepicker__current-month {
    font-size: 2vw;
  }

  .react-datepicker__day--outside-month {
    opacity: 0.3;
  }

  .react-datepicker__day--weekend {
    color: red;
  }

  .react-datepicker__day,
  .react-datepicker__day-name {
    display: table-cell;
    vertical-align: middle;
    width: 5vw;
    height: 5vw;
    font-size: 2vw;
    pointer-events: none;
  }

  .react-datepicker__day {
    border: 0.2vw solid white;
  }

  .react-datepicker__day-name {
    position: relative;
    left: 0.5vw;
  } 
  
  .react-datepicker__day--highlighted {
    background-color: red;
  }
`;

const Title = styled.p`
  font-size: 3vw;
`;