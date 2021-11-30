import React from "react";
import styled from "styled-components";
import {
  FaHashtag,
  FaUserAstronaut,
  FaAlignJustify,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

import { IconText } from "../../../commons/styles/template";

export default function Select({ handleIcon, icon, isSelect, setIsSelect }) {
  const iconList = [
    { icon: <FaAlignJustify />, name: "제목" },
    { icon: <FaUserAstronaut />, name: "글쓴이" },
    { icon: <FaHashtag />, name: "태그" },
  ];
  return (
    <Container>
      <Selected onClick={() => setIsSelect(!isSelect)}>
        {isSelect ? <FaAngleDown /> : <FaAngleRight />}
        {icon.icon}
        {icon.name}
      </Selected>
      {isSelect ? (
        <Options>
          {iconList
            .filter((el) => el.name !== icon.name)
            .map((el) => (
              <Option key={el.name} onClick={() => handleIcon(el)}>
                {el.icon}
                {el.name}
              </Option>
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

const Selected = styled(IconText)`
  font-size: 1.2rem;
  svg {
    font-size: 1.4rem;
  }
`;

const Options = styled.div`
  position: absolute;
  left: 1rem;
  top: 2.5rem;

  width: 7rem;

  border-radius: 0.25rem;
  box-shadow: 1px 1px 7px gray;
`;
const Option = styled(IconText)`
  padding: 0.5rem;
  margin: 0.1rem;

  font-size: 1.25rem;
  svg {
    font-size: 1.45rem;
  }

  :hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
`;
