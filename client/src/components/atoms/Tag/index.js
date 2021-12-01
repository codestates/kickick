import React from "react";
import styled from "styled-components";

const tagList = [
  { tag: "# ", label: "태그" },
  { tag: "제목 : ", label: "제목" },
  { tag: "글쓴이 : ", label: "글쓴이" },
];

export default function Tag({ handleClick, label, detail }) {
  const { tag } = tagList.find((i) => i.label === label);

  return (
    <Container onClick={handleClick}>
      {tag}
      {detail}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 0.5rem;
  border: 2px solid gray;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: gray;

  cursor: pointer;

  svg {
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }
`;
