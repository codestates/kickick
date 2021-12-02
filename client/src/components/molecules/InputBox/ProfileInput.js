import React from "react";
import styled from "styled-components";

import { IconText, Profile } from "../..";
import { fileReader } from "../../../commons/utils/fileReader";

export default function ProfileInput({ head, type, placeholder }) {
  if (type === "file")
    return (
      <Container>
        <h3>{head}</h3>
        <Profile type="mypageedit" />
        <form>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={fileReader}
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <IconText label="프로필 수정" />
          </label>
        </form>
      </Container>
    );

  return (
    <Container>
      <h3>{head}</h3>
      <input type={type} placeholder={placeholder} />
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
      font-size: 1rem;
    }
    &:focus {
      border: 3px solid rgba(0, 0, 255, 0.3);
    }
  }

  label {
    position: relative;
    left: 2rem;
  }
`;
