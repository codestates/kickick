import React from "react";
import styled from "styled-components";

import { BoardTodayKicks, BoardCategory } from "../../";

export default function BoardTop() {
  return (
    <div>
      <BoardTodayKicks />
      <BoardCategory />
    </div>
  );
}

const Container = styled.div``;
