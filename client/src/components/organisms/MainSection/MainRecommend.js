import React from "react";
import styled from "styled-components";

export default function MainRecommend({ kickListInfo }) {
  console.log(kickListInfo.data_by_3days);
  console.log(kickListInfo.data_by_tags);
  console.log(kickListInfo.data_by_time);
  return <Container>asdasdasd</Container>;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.jua};
  background-color: yellow;
`;
