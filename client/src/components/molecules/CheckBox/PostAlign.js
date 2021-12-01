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
            isActive={highlight === el.label}
            label={el.label}
            handleClick={handleAlign}
          />
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    > div {
      font-size: 1rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
