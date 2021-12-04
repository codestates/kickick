import React, { useState } from "react";
import styled, { css } from "styled-components";

import { FaBell } from "react-icons/fa";
import { getAlarm } from "../../../apis/alarm"

export default function AlarmBtn({ fontSize = "xl" }) {
  const [alarmOpen, setAlarmOpen] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [alarmArr, setAlarmArr] = useState([]);
  const [pagenation, setPagenation] = useState({ limit: 5, page_num: 1 });
  
  const alarmOpner = () => {
    if (alarmOpen) {
      return setAlarmOpen(false);
    }
    return getAlarm(pagenation.limit, pagenation.page_num).then((res) => {
      setAlarmArr(res.data.data);
      setAlarmOpen(true);
    }).then(()=>console.log("alarmArr:", alarmArr));
  }
  return (
    <Container>
      <AlarmContainer
        fontSize={fontSize}
        onClick={alarmOpner}
        onMouseEnter={() => setIsOver(true)}
        onMouseOut={() => setIsOver(false)}
      >
        <AlarmFrame>
          <AlarmCounter
            alarmLength={alarmArr.length}
            isOver={isOver}
            fontSize={fontSize}
          >
            {alarmArr.length > 9 ? "+9" : alarmArr.length}
          </AlarmCounter>
          <FaBell />
        </AlarmFrame>
      </AlarmContainer>
      <Dropdown dropdownOpen={alarmOpen} fontSize={fontSize}>
        {alarmArr.map((el) => (
          <li>{el.content}</li>
        ))}
      </Dropdown>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;

const AlarmContainer = styled.button`
  position: relative;
  top: ${({ theme,fontSize }) => `${theme.fontSizes[fontSize].split("rem")[0] / 10}rem`};
  border-radius: 50%;
  font-size: ${({ theme,fontSize }) => theme.fontSizes[fontSize]};
`;

const AlarmCounter = styled.div`
  position: absolute;
  display: ${({ alarmLength }) => alarmLength === 0 ? "none" : "default"};
  padding-top: ${({ theme, fontSize }) =>
    `${theme.fontSizes[fontSize].split("rem")[0] / 20}rem`};
  color: white;
  background-color: red;
  transition-property: width, bottom, right, height, border-radius;
  transition-duration: 0.2s;
  overflow: hidden;

  ${({ isOver }) =>
    !isOver &&
    css`
      bottom: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 5}rem`};
      right: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 7}rem`};
      width: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 3}rem`};
      height: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 3}rem`};

      border-radius: 50%;
      font-size: 0rem;
    `}

  ${({ isOver }) =>
    isOver &&
    css`
      bottom: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 8}rem`};
      right: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 16}rem`};
      width: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 1.5}rem`};
      height: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 1.5}rem`};
      border-radius: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 5}rem`};
      font-size: ${({ theme, fontSize }) =>
        `${theme.fontSizes[fontSize].split("rem")[0] / 10}rem`};
    `}
`;

const AlarmFrame = styled.div`
  pointer-events: none;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 2.3rem;
  display: ${({ dropdownOpen }) => (dropdownOpen ? "default" : "none")};
  /* left: -4rem; */
  width: 12rem;
  height: 30rem;
  color: ${({ theme }) => theme.color.back};
  background-color: ${({ theme }) => theme.color.main};

  li {
    padding: 0.3rem;
    font-size: 0.7rem;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;