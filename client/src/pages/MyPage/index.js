import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";
import {
  MyPageAside,
  Landscape,
  PostStaticsList,
  TabBox,
  ProfileEditForm,
  PostList,
} from "../../components";
import { FaArrowLeft } from "react-icons/fa";

export default function MyPage() {
  return (
    <>
      <Landscape />
      <Container>
        <MyPageAside />
        <Outlet />
      </Container>
    </>
  );
}

export function MyPageHome() {
  return (
    <MyPageHomeContainer>
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
    </MyPageHomeContainer>
  );
}

export function ProfileEdit() {
  return (
    <ProfileEditContainer>
      <Navigator head="프로필 수정" />
      <ProfileEditForm />
    </ProfileEditContainer>
  );
}

export function ProfileAttendance() {
  return (
    <ProfileAttendanceContainer>
      <Navigator head="출석" />
    </ProfileAttendanceContainer>
  );
}

export function MyActivityFavorite() {
  return (
    <MyActivityFavoriteContainer>
      <Navigator head="스크랩 한 글" />
      <PostList type="mypagefavorite" />
    </MyActivityFavoriteContainer>
  );
}
export function MyActivityMyPost() {
  return (
    <MyActivityMyPostContainer>
      <Navigator head="내가 쓴 글" />
      <PostList type="mypagemypost" />
    </MyActivityMyPostContainer>
  );
}
export function MyActivityMyComment() {
  return (
    <MyActivityMyCommentContainer>
      <Navigator head="내가 쓴 댓글" />
      <PostList type="mypagemycomment" />
    </MyActivityMyCommentContainer>
  );
}

export function Navigator({ head }) {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <FaArrowLeft
        onClick={() => {
          navigate(-1);
        }}
      />
      <h2>{head}</h2>
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
  row-gap: 5rem;

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

const MyPageHomeContainer = styled(SubContainer)``;
const ProfileEditContainer = styled(SubContainer)``;
const ProfileAttendanceContainer = styled(SubContainer)``;
const MyActivityFavoriteContainer = styled(SubContainer)``;
const MyActivityMyPostContainer = styled(SubContainer)``;
const MyActivityMyCommentContainer = styled(SubContainer)``;
