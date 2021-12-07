import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Outlet } from "react-router";

import { CardBox, EventPost, Align } from "../../components";

import event_sample from "../../assets/images/event_sample_landscape.png";

const noticeList = [
  { category: "news", component: <News /> },
  { category: "event", component: <Event /> },
];

export default function Notice() {
  const { category } = useParams();
  const { component } = noticeList.find((el) => el.category === category);

  return (
    <Container>
      <Outlet />
      {component}
    </Container>
  );
}

export function News() {
  return <div>d</div>;
}

export function Event() {
  const [highlight, setHighlight] = useState("진행중인 이벤트");
  const handleAlign = (event) => {
    const label = event.target.innerText;
    setHighlight(label);
  };

  return (
    <EventContainer>
      <Align
        category="이벤트"
        highlight={highlight}
        handleAlign={handleAlign}
      />
      <CardBox>
        <EventPost />
      </CardBox>
    </EventContainer>
  );
}

export function NoticeDetail() {
  const { notice_id } = useParams();

  return (
    <NoticeDetailContainer>
      <NoticeDetailInfo>
        <img src={event_sample} alt="" />
        <h2>오늘 가입 하시면 전원 킥머니 300 증정</h2>
        <div className="subinfo">
          <span>운영자 석</span>
          <span>6달전</span>
        </div>
      </NoticeDetailInfo>
      <NoticeDetailContent></NoticeDetailContent>
    </NoticeDetailContainer>
  );
}

const Container = styled.div`
  width: 64rem;
  margin: 15rem auto;

  @media ${({ theme }) => theme.device.notebookS} {
    width: 48rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 10rem 0;
`;

const NoticeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 48rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
  }

  span {
    margin-right: 1rem;
    color: gray;
  }

  @media ${({ theme }) => theme.device.notebookS} {
    width: 48rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const NoticeDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoticeDetailContent = styled.div`
  height: 60rem;
  background-color: #eeeeee;
`;
