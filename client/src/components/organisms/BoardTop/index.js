import React from "react";
import styled from "styled-components";

import { BoardTodayKicks, ShowCategory } from "../../";

export default function BoardTop() {
  return (
    <div>
      <BoardTodayKicks />
      <ShowCategory />
    </div>
  );
}

const Container = styled.div``;
