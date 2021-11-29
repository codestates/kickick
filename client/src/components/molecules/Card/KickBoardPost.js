import React from "react";
import styled from "styled-components";

import Thumbnail from "../../atoms/Img/Thumbnail";
import Profile from "../../atoms/Img/Profile";
import Alien from "../../../assets/images/alien.svg";
import Astronaut from "../../../assets/images/astronaut.svg";

export default function KickBoardPost() {
  return (
    <Container>
      <Thumbnail />
      <PostDescription>
        <PostSummary>
          <h3>자바스크립트 개 잘하는법</h3>
          <p>1. 코드스테이츠 부트캠프를 등록한다</p>
          <p>2. 공부한다</p>
        </PostSummary>
        <PostUser>
          <Profile profileType={"post"} />
          <div className="username">석창환</div>
          <div className="datetime">46분전</div>
          <div className="seperator">·</div>
          <div className="commentCount">{5} 개의 댓글</div>
        </PostUser>
      </PostDescription>
      <Interest>
        <img src={Astronaut} alt="astronaut" />
        <div className="seperator"></div>
        <img src={Alien} alt="alien" />
      </Interest>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  margin: ${({ theme }) => theme.margins.xxl};

  border-radius: 0.5rem;
  box-shadow: 1px 1px 10px #dddddd;

  overflow: hidden;
  cursor: pointer;

  @media ${({ theme }) => theme.device.notebookS} {
    width: calc(50% - 2rem);
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: calc(80% - 2rem);
  }
`;

const PostDescription = styled.div`
  margin: ${({ theme }) => theme.margins.xxl};
`;

const PostSummary = styled.div`
  height: 8rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.margins.lg};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    white-space: pre-line;
  }
`;
const PostUser = styled.div`
  display: flex;

  > div {
    color: gray;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 1.8;
  }
  .username {
    margin-left: ${({ theme }) => theme.margins.small};
    color: black;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1.5;
  }
  .seperator {
    margin: 0 ${({ theme }) => theme.margins.small};
  }
  .datetime {
    margin-left: auto;
  }
`;

const Interest = styled.div`
  display: flex;
  border-top: 0.1rem dashed gray;
  padding-top: ${({ theme }) => theme.paddings.small};
  padding-bottom: ${({ theme }) => theme.paddings.small};
  padding-left: ${({ theme }) => theme.paddings.xxl};
  padding-right: ${({ theme }) => theme.paddings.xxl};

  img {
    width: 1.5rem;
  }
  .seperator {
    width: 100%;
  }
`;
