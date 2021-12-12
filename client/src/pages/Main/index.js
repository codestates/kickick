import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import {
  MainMiniNav,
  MainNotice,
  MainRecommend,
  MainEvent,
} from "../../components";
import { getNoticesInfo, getNoticesList } from "../../apis/notices"
import { recommendedPost } from "../../apis/posts";

export default function Main() {
  const [kickListInfo, setKickList] = useState({});
  const [noticeInfo, setNoticeInfo] = useState({})
  const [eventInfo, setEventInfo] = useState([])
  const [kickListLoding, setKickListLoding] = useState(false);
  const [noticeLoding, setNoticeLoding] = useState(false);
  const [eventLoding, setEventLoding] = useState(false);

  useEffect(() => {
    // 킥 추천 불러오기
    recommendedPost()
      .then((res) => setKickList(res.data.data))
      .then(() => setKickListLoding(true));
    // 가장 최신 공지 하나 불러오기
    getNoticesList(null, "notice", 1, 1).then((res) => {
      getNoticesInfo(res.data.data[0].notice_id)
        .then((res) => setNoticeInfo(res.data.data))
        .then(() => setNoticeLoding(true));
    });
    // 이벤트 리스트 불러오기
    getNoticesList(null, "event", 4, 1)
      .then((res) => {
        setEventInfo([...res.data.data]);
      })
      .then(() => setEventLoding(true));
  }, []);
  
  console.log("isLoding", noticeLoding && eventLoding && kickListLoding);
  return (
    <Container>
      <ContentSection>
        <MainMiniNav />
        <MainRecommend kickListInfo={kickListInfo} />
      </ContentSection>
      <ContentSection>
        <Title>킥소식!</Title>
        <ContextContainer>
          <MainNotice noticeInfo={noticeInfo} />
        </ContextContainer>
      </ContentSection>
      <ContentSection>
        <Title>킥이벤트</Title>
        <ContextContainer>
          <MainEvent eventInfo={eventInfo} />
        </ContextContainer>
      </ContentSection>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 100vw;
  max-width: 100%;
  min-height: 79vh;
  margin-top: 4rem;
  padding: 0 5vw;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin: 2vw 0;
`;

const Title = styled.h1`
  align-self:flex-start;
  font-size: 2vw;
  font-family:${({theme})=>theme.fontFamily.jua};
`;

const ContextContainer = styled.article`
  /* display: flex;
  width: 80vw; */
`;