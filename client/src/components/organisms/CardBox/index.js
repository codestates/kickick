import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { KickBoardPost, NewsPost, EventPost } from "../../../components";

const cardlist = [
  {
    type: "kickboard",
    component(key, data) {
      return <KickBoardPost key={key} data={data} />;
    },
  },
  {
    type: "news",
    component(key, data) {
      return <NewsPost key={key} data={data} />;
    },
  },
  {
    type: "event",
    component(key, data) {
      return <EventPost data={data} />;
    },
  },
];

export default function CardBox({ type }) {
  const { component } = cardlist.find((el) => el.type === type);

  const list = useSelector((state) => state.board.data);

  return <Container>{list.map((el, idx) => component(idx, el))}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
