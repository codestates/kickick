import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import dateConverter from "../../../commons/utils/dateConverter";

const postItemList = [
  {
    type: "freepost",
    component(data) {
      return <Freepost data={data} />;
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
        <Link to={`/detailboard/${data.post_id}`}>{data.post_name}</Link>
      </div>
      <div>{data.user.username}</div>
      <div>{dateConverter(data.created_at)}</div>
      <div>{data.view_count}</div>
      <div>{data.comments.length}</div>
    </Container>
  );
}

const Container = styled.div`
  height: 2.5rem;
  color: #666;
  font-size: 0.9rem;

  div:nth-of-type(2) {
    color: black;
    text-align: start;
  }

  span {
    margin: 0 0.2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: red;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    height: 8rem;
    padding: 0.5rem 0;

    span {
      font-size: 0.75rem;
    }
  }
`;
