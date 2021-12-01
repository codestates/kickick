import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../../atoms/IconText";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Select({ handleIcon, icon, isSelect, setIsSelect }) {
  return (
    <Container>
      {isSelect ? <FaAngleDown /> : <FaAngleRight />}
      <Selected onClick={() => setIsSelect(!isSelect)}>
        <IconText label={icon.label} />
      </Selected>
      {isSelect ? (
        <Options>
          {iconList
            .filter((el) => el.category === "검색")
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

  width: 7.7rem;
  padding: 0 0.2rem;

  > svg {
    margin-right: 0.5rem;
  }
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  width: 5.8rem;

  border-radius: 0.1rem;
  background-color: rgba(0, 0, 0, 0.08);
`;

const Options = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1.7rem;

  width: 5.8rem;
  background-color: white;

  border-radius: 0.25rem;
  box-shadow: 0.5px 0.5px 5px #eee;

  > div:hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
`;
