import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { ProfileInput, Common } from "../../../components";
import { putUserInfo } from "../../../apis/users";
import { isLoginAction } from "../../../store/actions/login";

export default function ProfileEditForm() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.login);

  const [username, setUsername] = useState(isLogin.username);
  const [profile, setProfile] = useState(isLogin.profile);
  const [email, setEmail] = useState(isLogin.email);
  const [birthday, setBirthday] = useState(isLogin.birthday);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleProfile = (base64) => {
    console.log(base64);
    setProfile(base64);
  };

  const profileInputList = [
    {
      head: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력해주세요",
      value: username,
      handler: handleUsername,
    },
    {
      head: "이메일",
      type: "email",
      placeholder: "이메일을 입력해주세요",
      value: email,
      handler: handleEmail,
    },
    {
      head: "내상태",
      type: "text",
      placeholder: "내상태을 입력해주세요",
      value: birthday,
      handler: handleBirthday,
    },
    {
      head: "프로필 이미지 ",
      type: "file",
      value: profile,
      handler: handleProfile,
    },
  ];

  const handleUserInfo = () => {
    putUserInfo({ username, profile, email, birthday }).then(() => {
      // dispatch(
      //   isLoginAction({ ...isLogin, username, profile, email, birthday })
      // );
    });
  };
  return (
    <>
      <Container>
        <ListContainer>
          {profileInputList.map((el) => (
            <ProfileInput
              key={el.head}
              head={el.head}
              type={el.type}
              placeholder={el.placeholder}
              value={el.value}
              handler={el.handler}
            />
          ))}
        </ListContainer>
      </Container>
      <Common type="mypage" label="프로필 수정" handleClick={handleUserInfo} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-wrap: wrap;
  height: 22rem;
`;
