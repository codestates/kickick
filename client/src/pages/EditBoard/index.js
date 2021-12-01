import React from "react";
import styled from "styled-components";
import { EditQuill, TitleInput, Common, TagInput } from "../../components";

export default function EditBoard() {
  return (
    <Container>
      <TitleContainer>
        <TitleInput />
      </TitleContainer>
      <EditQuill image={false} />
      <TagInput />
      <BtnContainer>
        <Common label="등 록" btnType="bigger" />
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88rem;
  margin: 0 auto;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  text-align: center;
`;
