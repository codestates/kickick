import React from "react";
import styled from "styled-components";

import { Pagination, PostList } from "../../../components";

export default function BoardBottom() {
  return (
    <Container>
      <PostList type="freepost" />
      {/* <Pagination selectPage={selectPage} setSelectPage={setSelectPage} /> */}
    </Container>
  );
}

const Container = styled.div``;
