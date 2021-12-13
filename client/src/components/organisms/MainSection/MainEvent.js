import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import default_thumbnail from "../../../assets/images/default/default_thumbnail.jpg";

export default function MainEvent({ eventInfo = [{ thumbnail: "", summary: "" }] }) {
  const navigate = useNavigate();

  // console.log("event", eventInfo[0]);
  return (
    <Container>
      {eventInfo.length
        ? eventInfo.map((el) => (
            <EventContainer
              key={el.notice_id}
              onClick={() => navigate(`/notice/이벤트/${el.notice_id}`)}
            >
              <Thumbnail
                src={el.thumbnail && default_thumbnail}
                alt="thumbnail"
              />
              <SummaryContainer>
                <Summary>{el.summary}</Summary>
              </SummaryContainer>
            </EventContainer>
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.jua};
`;

const EventContainer = styled.article`
  width: 18vw;
  margin: 1vw;
  border-radius: 1vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw #F4F4F4;
  overflow: hidden;
  cursor:pointer;
`;

const SummaryContainer = styled.div`
  width: 18vw;
  height: 5vw;
  padding: 1vw;
`;

const Summary = styled.h1`
  display: -webkit-box;
  font-family: ${({ theme }) => theme.fontFamily.jua};
  font-size: 1.5vw;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 18vw;
  height: 20vw;
`;