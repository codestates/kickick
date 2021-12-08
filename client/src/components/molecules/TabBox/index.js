import React from "react";
import styled from "styled-components";

import { Tab } from "../../../components";

import { generalTabList } from "../../../commons/constants/mypage";

export default function TabBox({ category }) {
  const tabList = generalTabList.filter((l) => l.category === category);

  return (
    <Conatiner>
      {tabList.map((el) => (
        <Tab label={el.label} pathname={el.pathname} key={el.label} />
      ))}
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
