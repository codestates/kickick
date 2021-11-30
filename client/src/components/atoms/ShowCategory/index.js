import React from "react";
import styled from "styled-components";

import { IconText } from "../../../commons/styles/template";
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

const Container = styled(IconText)`
  margin: 2rem 0;

  font-size: 2rem;
  cursor: default;

  svg {
    font-size: 2rem;
  }
`;
