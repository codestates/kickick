import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

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
    label: ["태그", "제목", "글쓴이", "날짜", "조회수", "댓글"],
  },
];

export default function PostList({ type }) {
  const { label } = postList.find((el) => el.type === type);
  const data = useSelector((state) => state.board);

  return (
    <Container type={type}>
      <div className="columnName">
        {label.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      {data.data.map((el) => (
        <PostItem key={el.post_id} data={el} type={type} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .columnName {
    background: linear-gradient(to bottom, #fff 25%, #eee 100%);
    box-shadow: 1px 1px 5px #eee;
    font-weight: bold;

    @media ${({ theme }) => theme.device.tablet} {
      display: none;
    }
  }

  > div {
    display: flex;
    border-bottom: 1px solid #d8d8d8;

    > div {
      margin: auto 0;
      text-align: center;
      padding: 0.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media ${({ theme }) => theme.device.tablet} {
        height: 4rem;
      }
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

      ${({ type }) =>
      type === "freepost" &&
      css`
        > div:nth-of-type(1) {
          flex: 2;
        }
        > div:nth-of-type(2) {
          flex: 4.25;
        }
        > div:nth-of-type(3) {
          flex: 2;
        }
        > div:nth-of-type(4) {
          flex: 1.25;
        }
        > div:nth-of-type(5) {
          flex: 0.75;
        }
        > div:nth-of-type(6) {
          flex: 0.75;
        }
      `}
  }
`;
