import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Outlet } from "react-router";
import { NavLink } from "react-router-dom";

import {
  CardBox,
  EventPost,
  NewsPost,
  Align,
  BoardTop,
  IconText,
} from "../../components";

import event_sample from "../../assets/images/event_sample_landscape.png";

const noticeList = [
  { category: "news", component: <News /> },
  { category: "event", component: <Event /> },
];

export default function Notice() {
  const { category } = useParams();
  const { component } = noticeList.find((el) => el.category === category);

  return (
    <>
      <BoardTop />
      <Container>
        <NavContainer>
          <h3>
            <IconText category="공지" label="공지" />
          </h3>
          <NavLink to="/notice/news">뉴스</NavLink>
          <NavLink to="/notice/event">이벤트</NavLink>
        </NavContainer>
        <ContentContainer>
          <Outlet />
          {component}
        </ContentContainer>
      </Container>
    </>
  );
}

export function News() {
  return (
    <NewsContainer>
      <CardBox>
        <NewsPost />
      </CardBox>
    </NewsContainer>
  );
}

export function Event() {
  // const [highlight, setHighlight] = useState("진행중인 이벤트");
  // const handleAlign = (event) => {
  //   const label = event.target.innerText;
  //   setHighlight(label);
  // };

  return (
    <EventContainer>
      {/* <Align
        category="이벤트"
        highlight={highlight}
        handleAlign={handleAlign}
      /> */}
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
  display: flex;
  width: 64rem;
  margin: 3rem auto;
  gap: 1rem;

  @media ${({ theme }) => theme.device.notebookS} {
    width: 48rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48rem;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 7rem;
  height: 10rem;
  gap: 1.5rem;

  padding: 1rem;

  h3 {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    color: gray;
  }

  a {
    font-size: 1.2rem;
  }

  .active {
    color: purple;
    font-weight: bold;
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoticeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 48rem;

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
`;

const NoticeDetailContent = styled.div`
  height: 60rem;
  background-color: #eeeeee;
`;