import React from "react";
import styled from "styled-components";

import { PostStatics, Attendance } from "../../../components";
export default function SmallCardBox({ type = "statics" }) {
  return (
    <Container>
      {type === "statics" ? (
        <>
          <PostStatics type="외계인" num={25} />
          <PostStatics type="우주인" num={6} />
          <PostStatics />
        </>
      ) : (
        <>
          <Attendance type="kick_money" num={100} />
          <Attendance type="serial_attendance" num={3} />
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  border: 1px solid #d8d8d8;
`;
