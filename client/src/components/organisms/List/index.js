import React from "react";
import styled, { css } from "styled-components";

import { PostItem } from "../..";

const postList = [
  {
    type: "mypagefavorite",
    label: ["제목", "태그", "글쓴이", "날짜"],
  },
  {
    type: "mypagemypost",
    label: ["제목", "태그", "조회수", "날짜"],
  },
  {
    type: "mypagemycomment",
    label: ["댓글", "좋아요", "날짜"],
  },
  {
    type: "freepost",
    label: ["제목", "태그", "글쓴이", "날짜", "조회수", "댓글"],
  },
];

export default function List({ type }) {
  const { label } = postList.find((el) => el.type === type);
  return (
    <Container type={type}>
      {label.map((el) => (
        <div>{el}</div>
      ))}
      <PostItem type="mypagemycomment" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    border-bottom: 1px solid #dddddd;

    > div {
      text-align: center;
      padding: 0.5rem;
    }

    ${({ type }) =>
      (type === "mypagefavorite" || type === "mypagemypost") &&
      css`
        > div:nth-of-type(1) {
          flex: 3;
        }
        > div:nth-of-type(2) {
          flex: 4;
        }
        > div:nth-of-type(3) {
          flex: 1;
        }
        > div:nth-of-type(4) {
          flex: 2;
        }
      `}

    ${({ type }) =>
      type === "mypagecomment" &&
      css`
        > div:nth-of-type(1) {
          flex: 7;
        }
        > div:nth-of-type(2) {
          flex: 2;
        }
        > div:nth-of-type(3) {
          flex: 1;
        }
      `}
  }
`;
