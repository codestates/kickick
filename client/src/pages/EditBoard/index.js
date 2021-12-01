import React from "react";
import styled from "styled-components";
import { EditQuill, TitleInput, Common, TagInput } from "../../components";

export default function EditBoard() {
  return (
    <Container>
      <TitleInput />
      <EditQuill image={false} />
      <TagInput />
      <BtnContainer>
        <Common label="등 록" btnType="bigger" />
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 88rem;
  margin: 0 auto;
`;

const BtnContainer = styled.div`
  text-align: center;
`;
