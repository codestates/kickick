import React from "react";
import styled from "styled-components";

import { BoardTodayKicks, IconText } from "../../";

export default function BoardTop() {
  return (
    <div>
      <BoardTodayKicks />
      <IconContainer>
        <IconText label="예술" fontSize="2rem" />
      </IconContainer>
    </div>
  );
}

const IconContainer = styled.div`
  margin: 2rem 0;
`;
