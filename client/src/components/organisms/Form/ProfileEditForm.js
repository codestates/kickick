import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ProfileInput, Common } from "../../../components";

import { putUserInfo } from "../../../apis/users";
import { uploadSingleImage } from "../../../apis/upload";

import { isLoginAction } from "../../../store/actions/login";

import { validation } from "../../../commons/utils/validation";

export default function ProfileEditForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.login);

  const [disabled, setDisabled] = useState(false);
  const [username, setUsername] = useState(isLogin.username);
  const [profile, setProfile] = useState(isLogin.profile);
  const [rawProfile, setRawProfile] = useState();
  const [email, setEmail] = useState(isLogin.email);
  const [birthday, setBirthday] = useState(isLogin.birthday);
  const [errEmailMsg, setErrEmailMsg] = useState("");
  const [errNameMsg, setErrNameMsg] = useState(null);

  const handleUsername = (e) => {
    const { message, isValid } = validation("username", e.target.value);
    if (!isValid) {
      setErrNameMsg(message);
      setDisabled(true);
    } else {
      setErrNameMsg(null);
      setDisabled(false);
    }
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    const { message, isValid } = validation("email", e.target.value);
    if (!isValid) {
      setErrEmailMsg(message);
    } else {
      setErrEmailMsg(null);
    }
    setEmail(e.target.value);
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleProfile = (raw, base64) => {
    setRawProfile(raw);
    setProfile(base64);
  };

  const profileInputList = [
    {
      head: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력해주세요",
      value: username,
      handler: handleUsername,
      err: errNameMsg,
    },
    {
      head: "이메일",
      type: "email",
      placeholder: "이메일을 입력해주세요",
      value: email,
      handler: handleEmail,
      err: errEmailMsg,
    },
    {
      head: "생일",
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
    if (rawProfile) {
      const formData = new FormData();
      formData.append("img", rawProfile);
      uploadSingleImage(formData, "profile").then((data) => {
        const location = data.data.data.location;
        putUserInfo({ username, profile: location, email, birthday })
          .then(() => {
            navigate("/mypage/home");
            dispatch(
              isLoginAction({
                ...isLogin,
                username,
                profile: location,
                email,
                birthday,
              })
            );
          })
          .catch((err) => console.log(err));
      });
    } else {
      putUserInfo({ username, email, birthday })
        .then(() => {
          navigate("/mypage/home");
          dispatch(
            isLoginAction({
              ...isLogin,
              username,
              email,
              birthday,
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Container>
        <ListContainer>
          {profileInputList.map((el) => (
            <>
              <ProfileInput
                key={el.head}
                head={el.head}
                type={el.type}
                placeholder={el.placeholder}
                value={el.value}
                handler={el.handler}
                err={el.err}
              />
            </>
          ))}
        </ListContainer>
      </Container>
      <Common
        type="mypage"
        label="프로필 수정"
        handleClick={handleUserInfo}
        disabled={disabled}
      />
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
  gap: 2rem;
  flex-wrap: wrap;
  height: 25rem;
`;
