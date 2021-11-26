import React, { useState } from "react";
import styled from "styled-components";

import {
  FaHashtag,
  FaUserAstronaut,
  FaAlignJustify,
  FaAngleDown,
} from "react-icons/fa";

export default function Select({ size = "md" }) {
  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({
    icon: <FaAlignJustify />,
    name: "제목",
  });

  const handleIcon = ({ icon, name }) => {
    setIcon({ icon, name });
    setIsSelect(!isSelect);
  };

  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  return (
    <Container>
      <Choosen scale={scale}>
        <FaAngleDown
          onClick={() => setIsSelect(!isSelect)}
          style={{ cursor: "pointer", marginRight: "0.5rem" }}
        />

        <Selected scale={scale} style={{}}>
          {icon.icon}
          {icon.name}
        </Selected>
      </Choosen>
      {isSelect ? (
        <Options scale={scale}>
          <Option
            scale={scale}
            onClick={() =>
              handleIcon({ icon: <FaAlignJustify />, name: "제목" })
            }
          >
            <FaAlignJustify />
            제목
          </Option>
          <Option
            scale={scale}
            onClick={() =>
              handleIcon({ icon: <FaUserAstronaut />, name: "글쓴이" })
            }
          >
            <FaUserAstronaut />
            글쓴이
          </Option>
          <Option
            scale={scale}
            onClick={() => handleIcon({ icon: <FaHashtag />, name: "태그" })}
          >
            <FaHashtag />
            태그
          </Option>
        </Options>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 5rem;
`;

const Choosen = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => props.scale * 6}rem;
  height: ${(props) => props.scale * 2}rem;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
  line-height: 0.9;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => props.scale * 4.9}rem;
  height: ${(props) => props.scale * 2}rem;
  padding-left: 0.2rem;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
  line-height: 0.9;
`;

const Options = styled.div`
  width: ${(props) => props.scale * 5}rem;
  height: ${(props) => props.scale * 6}rem;

  border: 1px solid black;
  border-radius: 10px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => props.scale * 4.9}rem;
  height: ${(props) => props.scale * 2}rem;
  padding-left: 0.2rem;

  border-radius: 10px;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
  line-height: 0.9;

  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
  svg {
    margin-right: 0.3rem;
  }
`;
