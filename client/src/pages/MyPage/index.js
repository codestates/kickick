import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router";
import {
  MyPageAside,
  Landscape,
  PostStaticsList,
  TabBox,
  ProfileEditForm,
  Column,
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
      <Navigator />
      <ProfileEditForm />
    </ProfileEditContainer>
  );
}

export function ProfileAttendance() {
  return (
    <ProfileAttendanceContainer>
      <Navigator />
    </ProfileAttendanceContainer>
  );
}

export function MyActivityFavorite() {
  return (
    <MyActivityFavoriteContainer>
      <Navigator />
      <Column />
    </MyActivityFavoriteContainer>
  );
}
export function MyActivityMyPost() {
  return (
    <MyActivityMyPostContainer>
      <Navigator />
      내가 쓴 글
    </MyActivityMyPostContainer>
  );
}
export function MyActivityMyComment() {
  return (
    <MyActivityMyCommentContainer>
      <Navigator />
      내가 쓴 댓글
    </MyActivityMyCommentContainer>
  );
}

export function Navigator() {
  const navigate = useNavigate();

  return (
    <FaArrowLeft
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}
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
  > svg {
    font-size: 2rem;
    cursor: pointer;
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
