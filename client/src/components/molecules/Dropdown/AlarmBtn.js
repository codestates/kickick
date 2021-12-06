import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"
import styled, { css } from "styled-components";

import { FaBell } from "react-icons/fa";
import { getAlarm } from "../../../apis/alarm"
import { dateConverter } from "../../../commons/utils/dateConverter"

export default function AlarmBtn({ fontSize = "xl" }) {
  const navigate = useNavigate();

  const [alarmOpen, setAlarmOpen] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [alarmArr, setAlarmArr] = useState([]);
  const [pagenation, setPagenation] = useState({ limit: 5, page_num: 1 });

  useEffect(() => {
    getAlarm(pagenation.limit, pagenation.page_num)
      .then((res) => {
        setAlarmArr(res.data.data);
      })
      .then(() => console.log("alarmArr:", alarmArr));
  },[])
  
  const alarmOpner = () => {
    if (alarmOpen) {
      return setAlarmOpen(false);
    }
    return getAlarm(pagenation.limit, pagenation.page_num).then((res) => {
      setAlarmArr(res.data.data);
      setAlarmOpen(true);
    }).then(()=>console.log("alarmArr:", alarmArr));
  }

  const moveRefer = (obj) => {
    if (obj.reference.table === "post") {
      navigate(`/detailboard/${obj.reference.id}`);
      setAlarmOpen(false);
    }
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
      <Dropdown dropdownOpen={alarmOpen} fontSize={fontSize} top="2.3rem">
        {alarmArr.map((el) => (
          <DropdownList onClick={() => moveRefer(el)} key={el.alarm_id}>
            <DropdownContext>{el.content}</DropdownContext>
            {dateConverter(el.created_at).includes("전") ? (
              <DropdownCreated>{dateConverter(el.created_at)}</DropdownCreated>
            ) : null}
            {/* <DropdownCreated>3시간 전</DropdownCreated> */}
          </DropdownList>
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
  top: ${({top})=>top};
  display: ${({ dropdownOpen }) => (dropdownOpen ? "default" : "none")};
  left: -4rem;
  width: 16rem;
  max-height: 30rem;
  border:1px solid black;
  border-radius: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 0.3}rem`};
  color: ${({ theme }) => theme.color.back};
  background-color: ${({ theme }) => theme.color.main};
`;

const DropdownList = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 0.4rem;
  padding: 0.5rem 0;
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fontFamily.jua};
  cursor: pointer;
  border-bottom: 0.01rem solid #2e2e2e;

  :last-child {
    border-bottom: none;
  }
`;

const DropdownContext = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const DropdownCreated = styled(DropdownContext)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;