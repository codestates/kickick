import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { KickBoardPost } from "../../../components";

export default function CardBox() {
  const list = useSelector((state) => state.board.data);

  return (
    <Container>
      {list.map((el) => (
        <KickBoardPost key={el.post_id} data={el} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
