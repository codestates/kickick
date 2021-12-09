import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { PostItem, Pagination, Common } from "../../../components";

const postList = [
  {
    reducer: ["mypage", "favorites"],
    type: "mypagefavorites",
    label: ["태그", "제목", "글쓴이", "조회수", "스크랩삭제"],
  },
  {
    reducer: ["mypage", "mypost"],
    type: "mypagemypost",
    label: ["태그", "제목", "날짜", "조회수"],
  },
  {
    reducer: ["mypage", "mycomment"],
    type: "mypagemycomment",
    label: ["글 제목", "댓글", "날짜"],
  },
  {
    reducer: ["board"],
    type: "freepost",
    label: ["태그", "제목", "글쓴이", "날짜", "조회수"],
  },
];

export default function PostList({ type }) {
  const { label, reducer } = postList.find((el) => el.type === type);

  const { pathname } = useLocation();

  const [page, category] = decodeURI(pathname).slice(1).split("/");
  // const { data, count } = useSelector(
  //   (state) => state[`${page}`][`${category}`]
  // );
  let data;
  let count;
  const freepost = useSelector((state) => state[`${reducer[0]}`]);
  const mypage = useSelector(
    (state) => state[`${reducer[0]}`][`${reducer[1]}`]
  );

  if (type === "freepost") {
    data = freepost.data;
    count = freepost.count;
  } else {
    data = mypage.data;
    count = mypage.count;
  }

  const navigate = useNavigate();
  const handleMovePage = () => {
    navigate(`/editboard/${category}`);
  };

  return (
    <Container>
      <PostListContainer type={type}>
        <div className="columnName">
          {label.map((el) => (
            <div className="column">{el}</div>
          ))}
        </div>
        {data.length === 0 ? (
          <NoPostContainer>등록된 것이 없습니다</NoPostContainer>
        ) : (
          data.map((el, idx) => <PostItem key={idx} data={el} type={type} />)
        )}
      </PostListContainer>
      {type === "freepost" && (
        <Common type="register" label="글쓰기" handleClick={handleMovePage} />
      )}
      {data.length !== 0 && <Pagination count={count} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NoPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;

  .columnName {
    background: linear-gradient(to bottom, #fff 25%, #eee 100%);
    box-shadow: 1px 1px 5px #eee;
    font-weight: bold;

    @media ${({ theme }) => theme.device.mobileL} {
      display: none;
    }
  }

  > div {
    display: flex;
    border-bottom: 1px solid #d8d8d8;

    > div {
      margin: auto 0;
      text-align: center;
      padding: 0.75rem 0.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ${({ type }) =>
      (type === "mypagefavorites" || type === "mypagemypost") &&
      css`
        > div:nth-of-type(1) {
          flex: 2;
        }
        > div:nth-of-type(2) {
          flex: 3.5;
        }
        > div:nth-of-type(3) {
          flex: 2;
        }
        > div:nth-of-type(4) {
          flex: 1;
        }
        > div:nth-of-type(5) {
          flex: 1.5;
        }
      `}

    ${({ type }) =>
      type === "mypagemycomment" &&
      css`
        > div:nth-of-type(1) {
          flex: 3;
        }
        > div:nth-of-type(2) {
          flex: 5;
        }
        > div:nth-of-type(3) {
          flex: 2;
        }
      `}

      ${({ type }) =>
      type === "freepost" &&
      css`
        > div:nth-of-type(1) {
          flex: 3;
        }
        > div:nth-of-type(2) {
          flex: 4;
          color: black;
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

        @media ${({ theme }) => theme.device.mobileL} {
          display: flex;
          flex-wrap: wrap;
          gap: 0;

          > div {
            margin: 0;
            padding: 0 0.5rem;
            text-align: start;
            height: 1.2rem;
          }

          > div:nth-of-type(1) {
            flex: 2;
            font-size: 0.7rem;
          }

          > div:nth-of-type(2) {
            flex-basis: 100%;
            font-size: 1.2rem;
            font-weight: bold;
            height: 2rem;
          }
          > div:nth-of-type(3) {
            flex: 1;
            flex-basis: 5rem;
            font-size: 0.8rem;
          }
          > div:nth-of-type(4) {
            flex: 0.5;
            flex-basis: 5rem;
            font-size: 0.8rem;
          }
          > div:nth-of-type(5) {
            flex: 8.5;
            flex-basis: 3rem;
            font-size: 0.8rem;
          }
        }
      `}
  }
`;
