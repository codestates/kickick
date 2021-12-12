import React from "react";
import styled from "styled-components";

import { Common, Profile } from "../../../components";

import { fileReader } from "../../../commons/utils/fileReader";

export default function ProfileInput({
  head,
  type,
  placeholder,
  handler,
  value,
}) {
  if (type === "file")
    return (
      <Container>
        <h3>{head}</h3>
        <Profile type="mypageedit" src={value} />
        <form>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={(e) => fileReader(e, handler)}
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <Common type="imgedit" label="이미지 수정" />
          </label>
        </form>
      </Container>
    );

  return (
    <Container>
      <h3>{head}</h3>
      <input
        value={value}
        onChange={handler}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
}

const Container = styled.div`
  h3 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  input {
    width: 30rem;
    height: 3rem;
    background-color: #eeeeee;
    border: 3px solid #dddddd;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    ::placeholder {
      font-style: italic;
      font-size: 0.85rem;
    }
    &:focus {
      border: 3px solid rgba(0, 0, 255, 0.3);
    }
  }

  label {
    position: relative;
    left: 2.2rem;
    top: -0.5rem;
  }
  img {
    margin: 2rem;
  }
`;
