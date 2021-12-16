import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

import { PostStatics, Attendance, IconText } from "../../../components";
export default function SmallCardBox({ type = "statics", data }) {
  const [dropdownOn, setDropDownOn] = useState(false);
  return (
    <Container>
      {type === "statics" ? (
        <>
          <MainContainer>
            <PostStatics type="외계인" num={data.alien} />
            <PostStatics type="우주인" num={data.astronaut} />
            <PostStatics type="중립" num={data.common} />
          </MainContainer>
          <SubContainer dropdown={dropdownOn}>
            <div>dddddddd</div>
            <div onClick={() => setDropDownOn(!dropdownOn)}>
              <IconText label="자세히보기" />
            </div>
          </SubContainer>
        </>
      ) : (
        <MainContainer>
          <Attendance type="kick_money" num={100} />
          <Attendance type="serial_attendance" num={3} />
        </MainContainer>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem 0.5rem 0 0;
  border: 1px solid #d8d8d8;
`;

const SubContainer = styled.div`
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid #d8d8d8;
  background: #efffff;
  padding: 0.5rem;
  overflow: hidden;

  height: ${({ dropdown }) => (dropdown ? "15rem" : "3rem")};
`;
