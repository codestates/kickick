import React from "react";
import styled from "styled-components";

import Tab from "../../atoms/Tab";

export default function TabBox({ list }) {
  return (
    <Conatiner>
      {list.map((el) => (
        <Tab label={el.label} to={el.to} key={el} />
      ))}
    </Conatiner>
  );
}

const Conatiner = styled.div`
  width: 10rem;

  border-top: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;

  .active {
    border-left: 3px solid #0c0c42;
    background-color: #eeeeee;
    cursor: default;
    pointer-events: none;
    font-weight: bold;
    color: #0c0c42;
  }
`;
