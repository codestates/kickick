import React from "react";
import styled from "styled-components";

import default_thumbnail from "../../../assets/images/default_thumbnail.jpg"

export default function MainNotice({ noticeInfo }) {
  return (
    <Container>
      <Thumpnail src={noticeInfo.thumbnail && default_thumbnail} alt="thumbnail" />
      <ContextContainer>
        <Title>{noticeInfo.notice_name}</Title>
        <Context>{noticeInfo.summary}</Context>
      </ContextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* gap: 2vw; */
  margin-top: 1vw;
  /* border: 1px solid black; */
  font-family: ${({ theme }) => theme.fontFamily.jua};
`;

const Thumpnail = styled.img`
  width: 40vw;
  height: 30vw;
  background-color:black;
`;

const ContextContainer = styled.article`
  height: inherit;
  width: 40vw;
  padding: 2vw;
  pointer-events:none;
`;

const Title = styled.h1`
  margin: 2vw 0 2vw;
  padding: 0 0 0 1vw;
  font-size: 3.3vw;
`;

const Context = styled.p`
  font-size: 2vw;
`;
