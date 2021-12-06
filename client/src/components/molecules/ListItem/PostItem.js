import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const postItemList = [
  {
    type: "freepost",
    component(data) {
      return <Freepost data={data} />;
    },
  },
  {
    type: "mypagemypost",
    component(data) {
      return <MyPageMyPost data={data} />;
    },
  },
  {
    type: "mypagemycomment",
    component(data) {
      return <MyPageMyComment data={data} />;
    },
  },
  {
    type: "mypagefavorites",
    component(data) {
      return <MyPageFavorites data={data} />;
    },
  },
];

export default function PostItem({ type, data }) {
  const { component } = postItemList.find((el) => el.type === type);

  return component(data);
}

export function Freepost({ data }) {
  return (
    <Container>
      <div>
        {/* {data.tags.map((el) => (
          <span># {el.content}</span>
        ))} */}
        <span>#어질어질</span>
        <span>#어질어질</span>
      </div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>
          {data.post_name}
          <span>[{data.comments.length}]</span>
        </Link>
      </div>
      <div>{data.user.username}</div>
      <div>{data.created_at}</div>
      <div>{data.view_count}</div>
    </Container>
  );
}

export function MyPageMyPost({ data }) {
  return (
    <Container>
      <div>
        {/* {data.tags.map((el) => (
          <span># {el.content}</span>
        ))} */}
        <span>#어질어질</span>
        <span>#어질어질</span>
      </div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>{data.post_name}</Link>
      </div>
      <div>{data.created_at}</div>
      <div>{data.view_count}</div>
    </Container>
  );
}

export function MyPageMyComment({ data }) {
  return (
    <Container>
      <div>
        {/* {data.tags.map((el) => (
          <span># {el.content}</span>
        ))} */}
        <span>#어질어질</span>
        <span>#어질어질</span>
      </div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>{data.post_name}</Link>
      </div>
      <div>{data.created_at}</div>
      <div>{data.view_count}</div>
    </Container>
  );
}

export function MyPageFavorites({ data }) {
  return (
    <Container>
      <div>
        {/* {data.tags.map((el) => (
          <span># {el.content}</span>
        ))} */}
        <span>#어질어질</span>
        <span>#어질어질</span>
      </div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>{data.post_name}</Link>
      </div>
      <div>{data.created_at}</div>
      <div>{data.view_count}</div>
    </Container>
  );
}

const Container = styled.div`
  color: #666;
  font-size: 0.9rem;

  div:nth-of-type(2) {
    text-align: start;
    font-size: 0.95rem;
  }

  span {
    margin: 0 0.2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: hotpink;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    margin: 0.5rem 0;
  }
`;
