import React from "react";
import styled from "styled-components";

const postItemList = [
  {
    type: "freepost",
    component(props) {
      return <Freepost {...props} />;
    },
  },
];

export default function PostItem({ type, data }) {
  const { component } = postItemList.find((el) => el.type === type);

  return component(data);
}

export function Freepost({ data }) {
  <Container>
    <div>{data.post_name}</div>
    <div>
      {data.tags.map((el) => (
        <span>{el.content}</span>
      ))}
    </div>
    <div>{data.user.username}</div>
    <div>{data.created_at}</div>
  </Container>;
}

const Container = styled.div`
  div {
    padding: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin: 0 0.5rem;
  }
`;
