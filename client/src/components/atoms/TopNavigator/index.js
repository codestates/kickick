import React from "react";
import styled from "styled-components";

export default function TopNavigator({ menu = "게시판", category = "학습" }) {
  return (
    <Container>
      메인 &#62; {menu} &#62; {category}
    </Container>
  );
}

const Container = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
`;
