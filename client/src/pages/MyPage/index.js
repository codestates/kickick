import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  MyPageAside,
  Landscape,
  PostStaticsList,
  TabBox,
  ProfileEditForm,
  PostList,
} from "../../components";

import { FaArrowLeft } from "react-icons/fa";

import { getPostsList } from "../../apis/posts";
import { getComments } from "../../apis/comments";
import { getFavorites } from "../../apis/favorites";

import {
  getFavoritesAction,
  getMyPostAction,
  getMyCommentAction,
} from "../../store/actions/mypage";

const pageList = [
  { category: "home", component: <Home /> },
  { category: "profile", component: <Profile />, title: "프로필" },
  { category: "attendance", component: <Attendance />, title: "출석" },
  { category: "favorites", component: <Favorites />, title: "스크랩 한 글" },
  { category: "mypost", component: <MyPost />, title: "내가 쓴 글" },
  { category: "mycomment", component: <MyComment />, title: "내가 단 댓글" },
];

export default function MyPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { component, title } = pageList.find((el) => el.category === category);

  useEffect(() => {
    getFavorites({})
      .then((data) => dispatch(getFavoritesAction(data)))
      .catch((err) => console.log(err));

    getPostsList({})
      .then((data) => dispatch(getMyPostAction(data)))
      .catch((err) => console.log(err));

    getComments({})
      .then((data) => dispatch(getMyCommentAction(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <Landscape />
      <Container>
        <MyPageAside />
        <SubContainer>
          {category !== "home" && <Navigator title={title} />}
          {component}
        </SubContainer>
      </Container>
    </>
  );
}

export function Home() {
  return (
    <>
      <ListContainer>
        <h2>회원정보</h2>
        <PostStaticsList />
        <TabBox category="회원정보" />
      </ListContainer>
      <ListContainer>
        <h2>나의활동</h2>
        <TabBox category="나의활동" />
      </ListContainer>
      <ListContainer>
        <h2>구매목록</h2>
        <TabBox category="구매목록" />
      </ListContainer>
    </>
  );
}

export function Profile() {
  return <ProfileEditForm />;
}

export function Attendance() {
  return <div>d</div>;
}

export function Favorites() {
  return <PostList type="mypagefavorites" />;
}
export function MyPost() {
  return <PostList type="mypagemypost" />;
}
export function MyComment() {
  return <PostList type="mypagemycomment" />;
}

export function Navigator({ title }) {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <FaArrowLeft
        onClick={() => {
          navigate(-1);
        }}
      />
      <h2>{title}</h2>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  svg {
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  top: -15rem;
  z-index: 3;

  width: 77rem;
  margin: 0 auto;
  padding: 3rem;
  background-color: white;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  width: 77%;
  padding: 2rem;
  border-left: 2px dashed #dddddd;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
