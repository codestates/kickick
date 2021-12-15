import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  CardBox,
  BoardTop,
  IconText,
  Common,
  Thumbnail,
} from "../../components";

import { getNoticesInfo, getNoticesList } from "../../apis/notices";

import { getListAction } from "../../store/actions/postlist";
import { getPostInfoAction } from "../../store/actions/postinfo";

const noticeList = [
  { category: "소식", component: <News /> },
  { category: "이벤트", component: <Event /> },
];

export default function Notice({ themeCode }) {
  const navigate = useNavigate();
  const { category } = useParams();
  if (category !== "소식" && category !== "이벤트") {
    navigate("/error");
    return <div></div>;
  }

  const { component } = noticeList.find((el) => el.category === category);

  return (
    <>
      <BoardTop themeCode={themeCode} />
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postsearch, login } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  const handleNewPost = () => {
    navigate("edit");
  };

  useEffect(() => {
    getNoticesList({
      type: "notices",
      limit: 10,
      page_num: postsearch.selectPage,
    }).then((data) => {
      dispatch(getListAction(data.data));
      setLoading(false);
    });
  }, [postsearch.selectPage, dispatch]);
  if (loading) return <div>d</div>;
  return (
    <NewsContainer>
      {login.isLogin.type === "admin" && (
        <Common type="new" label="글쓰기" handleClick={handleNewPost} />
      )}
      <CardBox type="news" />
    </NewsContainer>
  );
}

export function Event() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postsearch, login } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  const handleNewPost = () => {
    navigate("edit");
  };

  useEffect(() => {
    getNoticesList({
      type: "events",
      limit: 10,
      page_num: postsearch.selectPage,
    }).then((data) => {
      dispatch(getListAction(data.data));
      setLoading(false);
    });
  }, [postsearch.selectPage, dispatch]);
  if (loading) return <div>d</div>;

  return (
    <EventContainer>
      {login.isLogin.type === "admin" && (
        <Common type="new" label="글쓰기" handleClick={handleNewPost} />
      )}
      <CardBox type="event" />
    </EventContainer>
  );
}

export function NoticeDetail({ themeCode }) {
  const { notice_id } = useParams();
  const dispatch = useDispatch();
  const { postInfo } = useSelector((state) => state.persist);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNoticesInfo(notice_id).then((data) => {
      dispatch(getPostInfoAction(data.data.data));
      setLoading(false);
    });
  }, [notice_id, dispatch]);

  if (loading) return <div></div>;
  return (
    <NoticeDetailContainer>
      <NoticeDetailInfo>
        <Thumbnail src={postInfo.thumbnail} alt="" />
        <h2>{postInfo.notice_name}</h2>
        <div className="subinfo">
          <span>운영자 석</span>
          <span>6달전</span>
        </div>
      </NoticeDetailInfo>
      <NoticeDetailContent>
        <ReactQuill
          readOnly={true}
          theme={"bubble"}
          value={postInfo.content}
          style={{ color: themeCode === "light" ? "#222" : "#fff" }}
        />
      </NoticeDetailContent>
    </NoticeDetailContainer>
  );
}

const Container = styled.div`
  display: flex;
  width: 90rem;
  margin: 3rem auto;
  gap: 1rem;
  min-height: 30vh;

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
    color: ${({ theme }) => theme.color.font};
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

  h2 {
    color: ${({ theme }) => theme.color.font};
  }
`;

const NoticeDetailContent = styled.div`
  height: 60rem;
  background-color: ${({ theme }) => theme.color.shadow};
`;
