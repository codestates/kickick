import React from "react";
import styled from "styled-components";

import Thumbnail from "../../atoms/Img/Thumbnail";

export default function KickBoardPost() {
  return (
    <Container>
      <Thumbnail />

      <h3>
        댓글 <strong>52</strong>
      </h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  border-radius: 10px;

  overflow: hidden;
`;
