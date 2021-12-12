import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Outlet } from "react-router";
import { NavLink } from "react-router-dom";

import {
  CardBox,
  EventPost,
  NewsPost,
  BoardTop,
  IconText,
} from "../../components";

import event_sample from "../../assets/images/event_sample_landscape.png";

const noticeList = [
  { category: "소식", component: <News /> },
  { category: "이벤트", component: <Event /> },
];

export default function Notice() {
  const { category } = useParams();
  const { component } = noticeList.find((el) => el.category === category);

  return (
    <>
      {/* <BoardTop /> */}
      <Container>
        <NavContainer>
          <h3>공지</h3>
          <NavLink to="/notice/소식">
            <IconText label="뉴스" />
          </NavLink>
          <NavLink to="/notice/이벤트">
            <IconText label="이벤트" />
          </NavLink>
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
  return (
    <EventContainer>
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
  width: 90rem;
  margin: 3rem auto;
  gap: 1rem;

  @media ${({ theme }) => theme.device.notebookL} {
    width: 64rem;
  }
  @media ${({ theme }) => theme.device.notebookS} {
    width: 48rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;

  gap: 3rem;

  @media ${({ theme }) => theme.device.notebookL} {
    width: 100%;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 12rem;
  height: 10rem;
  gap: 0.5rem;

  padding: 1rem;

  h3 {
    font-size: 0.8rem;
    padding: 0.5rem;
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

  @media ${({ theme }) => theme.device.notebookL} {
    display: none;
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
  width: 48rem;
  margin: 0 auto;
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
  gap: 1.5rem;
`;

const NoticeDetailContent = styled.div`
  height: 60rem;
  background-color: #eeeeee;
`;
