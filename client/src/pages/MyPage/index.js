import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import {
  MyPageAside,
  Landscape,
  PostStaticsList,
  TabBox,
  ProfileEditForm,
} from "../../components";

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
      <ProfileEditForm head="프로필 수정" />
    </ProfileEditContainer>
  );
}

export function ProfileAttendance() {
  return <ProfileAttendanceContainer>출석</ProfileAttendanceContainer>;
}

export function Favorite() {
  return <FavoriteContainer>즐겨찾기</FavoriteContainer>;
}
export function Activity() {
  return <ActivityContainer>나의 활동</ActivityContainer>;
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  top: -15rem;
  z-index: 2;

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
const FavoriteContainer = styled(SubContainer)``;
const ActivityContainer = styled(SubContainer)``;
