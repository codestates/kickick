import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { BoardTodayKicks, IconText } from "../../";

export default function BoardTop() {
  const state = useSelector((state) => state.board);
  return (
    <div>
      <BoardTodayKicks />
      <IconContainer>
        <IconText label="학습" board={true} />
      </IconContainer>
    </div>
  );
}

const IconContainer = styled.div`
  margin: 2rem 0;
`;
