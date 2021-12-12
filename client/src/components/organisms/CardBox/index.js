import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { KickBoardPost } from "../../../components";

export default function CardBox({ children }) {
  const list = useSelector((state) => state.board.data);
  const arr = Array(10).fill(0);

  return (
    <Container>
      {/* {list.map((el, idx) => (
        <KickBoardPost key={idx} data={el} />
      ))} */}

      {arr.map((el) => (
        <>{children}</>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
