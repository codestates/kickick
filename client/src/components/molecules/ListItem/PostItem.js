import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IconBox } from "../../../components";
import { delFavorites } from "../../../apis/favorites";
import { refreshSearchAction } from "../../../store/actions/postsearch";
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
  {
    type: "mypagelog",
    component(data) {
      return <MyPageLogs data={data} />;
    },
  },
];

export default function PostItem({ type, data }) {
  const { component } = postItemList.find((el) => el.type === type);

  return component(data);
}

export function Freepost({ data }) {
  const { category } = useParams();
  return (
    <Container>
      <div>
        {data.tags.length === 1
          ? data.tags.map((tag) => <span># {tag}</span>)
          : data.tags
              .filter((el) => el !== category)
              .map((tag) => <span> # {tag}</span>)}
      </div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>{data.post_name}</Link>
        {data.comments.length >= 1 && (
          <span
            style={{ fontSize: "0.6rem" }}
          >{`[${data.comments.length}]`}</span>
        )}
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
      <div>{data.post.post_name}</div>
      <div>
        <Link to={`/detailboard/${data.post_id}`}>{data.content}</Link>
      </div>
      <div>{data.created_at}</div>
      <div>{data.view_count}</div>
    </Container>
  );
}

export function MyPageFavorites({ data }) {
  const dispatch = useDispatch();
  const handleDelFavorites = () => {
    delFavorites(data.post.post_id)
      .then(() => {
        dispatch(refreshSearchAction());
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div>{data.post.category.slice(0, -3)}</div>
      <div>
        <Link to={`/detailboard/${data.post.post_id}`}>
          {data.post.post_name}
        </Link>
      </div>
      <div>{data.post.user.username}</div>
      <div>{data.post.view_count}</div>

      <IconBox label="cmtDel" handleClick={handleDelFavorites} />
    </Container>
  );
}

export function MyPageLogs({ data }) {
  return (
    <Container>
      <div>{data.created_at}</div>
      <div>{data.content}</div>
      <div>{"출석"}</div>
    </Container>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.color.subfont};
  font-size: 0.9rem;
  div:nth-of-type(2) {
    text-align: start;
    font-size: 0.95rem;
  }

  span {
    margin: 0 0.2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.tag};
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
