import React from "react";
import styled from "styled-components";

import IconText from "../../atoms/IconText";

export default function BoardCategory({ label = "학습" }) {
  return (
    <Container>
      <IconText label={label} />
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;

  border-radius: 5px;
`;
