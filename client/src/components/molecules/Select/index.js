import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../../atoms/IconText";
import { FaAngleDown } from "react-icons/fa";

export default function Select({
  handleIcon,
  icon,
  isSelect,
  setIsSelect,
  category = "검색",
}) {
  return (
    <Container>
      <Selected onClick={() => setIsSelect(!isSelect)}>
        <IconText label={icon.label} />
        <FaAngleDown />
      </Selected>
      {isSelect ? (
        <Options>
          {iconList
            .filter((el) => el.category === category)
            .filter((el) => el.label !== icon.label)
            .map((el) => (
              <IconText
                key={el.label}
                label={el.label}
                handleClick={() => handleIcon(el)}
              />
            ))}
        </Options>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 7rem;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  width: 7rem;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.color.select};
  cursor: pointer;
  svg {
    margin-left: auto;
    margin-right: 0.5rem;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 2.5rem;
  width: 7rem;

  background-color: white;

  border-radius: 0.25rem;
  box-shadow: 0.5px 0.5px 5px #eee;

  cursor: pointer;

  > div:hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
`;
