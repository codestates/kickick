import React, { useState } from "react";
import styled from "styled-components";

export default function Textarea({ handleClick, ...props }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (e.target.value.length <= 200) {
      setValue(e.target.value);
    } else {
      return;
    }
  };
  return (
    <Container>
      <TextArea
        placeholder="로그인 후 사용가능합니다"
        {...props}
        onChange={handleChange}
        value={value}
      />
      <p>{value.length} / 200</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  p {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;
const TextArea = styled.textarea`
  min-width: 100%;
  height: 7rem;

  padding: 1rem;
  border-radius: 5px;
  border: 2px solid #eeeeee;

  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid skyblue;
  }
`;
