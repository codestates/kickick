import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../../atoms/IconText";

export default function PostAlign({ highlight, handleAlign }) {
  return (
    <Container>
      {iconList
        .filter((el) => el.category === "정렬")
        .map((el) => (
          <IconText
            highlight={highlight}
            label={el.label}
            handleClick={handleAlign}
          />
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;
