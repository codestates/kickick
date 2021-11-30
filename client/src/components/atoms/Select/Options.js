import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../IconText";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Select({ handleIcon, icon, isSelect, setIsSelect }) {
  return (
    <Container>
      <Selected onClick={() => setIsSelect(!isSelect)}>
        {isSelect ? <FaAngleDown /> : <FaAngleRight />}
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

  width: 7.5rem;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  > div {
    font-size: 1rem;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.125rem;
  }
`;

const Options = styled.div`
  position: absolute;
  left: 1rem;
  top: 2.5rem;

  width: 7rem;

  border-radius: 0.25rem;
  box-shadow: 1px 1px 7px gray;

  > div {
    padding: 0.5rem;
    margin: 0.1rem;
    font-size: 1.25rem;
  }
  > div:hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
  svg {
    font-size: 1.3rem;
  }
`;
