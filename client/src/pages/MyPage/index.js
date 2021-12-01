import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import { MyPageTab, Landscape } from "../../components";

export default function MyPage() {
  return (
    <>
      <Landscape />
      <Container>
        <MyPageTab />
        <Outlet />
      </Container>
    </>
  );
}

export function Profile() {
  return <ProfileContainer>회원정보</ProfileContainer>;
}

export function Favorite() {
  return <FavoriteContainer>즐겨찾기</FavoriteContainer>;
}
export function Post() {
  return <PostContainer>내가 올린 글</PostContainer>;
}

const Container = styled.div`
  display: flex;
  position: relative;
  top: -10rem;
  z-index: 999;

  width: 66rem;
  margin: 0 auto;
`;

const SubContainer = styled.div`
  border: 1px solid #eeeeee;
  background-color: #eeeeee;
  width: 100%;
`;

const ProfileContainer = styled(SubContainer)``;
const FavoriteContainer = styled(SubContainer)``;
const PostContainer = styled(SubContainer)``;
