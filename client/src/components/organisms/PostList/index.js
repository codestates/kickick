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
    label: ["게시판", "댓글", "좋아요", "날짜"],
  },
  {
    type: "freepost",
    label: ["제목", "태그", "글쓴이", "날짜", "조회수", "댓글"],
  },
];

export default function PostList({ type, data }) {
  const { label } = postList.find((el) => el.type === type);
  return (
    <Container type={type}>
      <div className="columnName">
        {label.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      {/* {data.map((el) => (
        <PostItem key={el.post_id} data={el} type={type} />
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .columnName {
    background: linear-gradient(to bottom, #fff 25%, #eee 100%);
    box-shadow: 1px 1px 7px #eee;
    font-weight: bold;
  }

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
      type === "mypagemycomment" &&
      css`
        > div:nth-of-type(1) {
          flex: 2;
        }
        > div:nth-of-type(2) {
          flex: 5;
        }
        > div:nth-of-type(3) {
          flex: 1;
        }
        > div:nth-of-type(4) {
          flex: 2;
        }
      `}
  }
`;
