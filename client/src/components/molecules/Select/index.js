import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../../atoms/IconText";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Select({
  handleIcon,
  icon,
  isSelect,
  setIsSelect,
  category = "검색",
}) {
  return (
    <Container category={category}>
      {isSelect ? <FaAngleDown /> : <FaAngleRight />}
      <Selected onClick={() => setIsSelect(!isSelect)} category={category}>
        <IconText label={icon.label} />
      </Selected>
      {isSelect ? (
        <Options category={category}>
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

  /* width: ${({ category }) =>
    category === "게시판" ? "10rem" : "7.5rem"}; */
  padding: 0 0.2rem;

  > svg {
    margin-right: 0.5rem;
  }
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  /* width: ${({ category }) => (category === "게시판" ? "8rem" : "5.8rem")}; */
  width: 5.8rem;
  border-radius: 0.1rem;
  background-color: rgba(0, 0, 0, 0.08);
`;

const Options = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1.7rem;
  width: 5.8rem;
  /* width: ${({ category }) => (category === "게시판" ? "8rem" : "5.8rem")}; */
  background-color: white;

  border-radius: 0.25rem;

  z-index: 10;
  > div {
    padding: 0.5rem;
    margin: 0.1rem;
    font-size: 1rem;
    background-color: #ffffff;
  }
  box-shadow: 0.5px 0.5px 5px #eee;

  > div:hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
`;
