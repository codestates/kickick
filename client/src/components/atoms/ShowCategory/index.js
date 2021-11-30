import React from "react";
import styled from "styled-components";

import {
  FaBook,
  FaAffiliatetheme,
  FaShoppingBag,
  FaGuitar,
  FaMoneyBillAlt,
  FaHelicopter,
} from "react-icons/fa";

export default function ShowCategory({ type = "학습" }) {
  const typeArr = ["학습", "여가", "생활", "예술", "경제", "여행"];
  const iconArr = [
    <FaBook />,
    <FaAffiliatetheme />,
    <FaShoppingBag />,
    <FaGuitar />,
    <FaMoneyBillAlt />,
    <FaHelicopter />,
  ];
  const idx = typeArr.findIndex((el) => el === type);
  return (
    <Container>
      {iconArr[idx]}
      {typeArr[idx]}
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;

  display: flex;
  align-items: center;
  padding: 0.5rem;

  border-radius: 5px;

  font-size: 2rem;
  font-weight: bold;

  cursor: default;
  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    pointer-events: none;
  }
`;
