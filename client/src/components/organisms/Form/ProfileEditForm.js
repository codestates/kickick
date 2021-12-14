import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { ProfileInput, Common, Modal } from "../../../components";

import { putUserInfo, delUserInfo } from "../../../apis/users";
import { uploadSingleImage } from "../../../apis/upload";
import { signOut } from "../../../apis/auth";

import { isLoginAction, isPointAction } from "../../../store/actions/login";

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
  const [password, setPassword] = useState();
  const [errEmailMsg, setErrEmailMsg] = useState();
  const [errNameMsg, setErrNameMsg] = useState();
  const [errPWMsg, setErrPWMsg] = useState();
  const [modal, setModal] = useState(false);

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
      setDisabled(true);
    } else {
      setErrEmailMsg(null);
      setDisabled(false);
    }
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    const { message, isValid } = validation("password", e.target.value);
    if (!isValid) {
      setErrPWMsg(message);
      setDisabled(true);
    } else {
      setErrPWMsg(null);
      setDisabled(false);
    }
    if (e.target.value === "") {
      setPassword(null);
      setDisabled(false);
      setErrPWMsg(null);
      return;
    }
    setPassword(e.target.value);
  };
  const handleProfile = (raw, base64) => {
    console.log("ee");
    setRawProfile(raw);
    setProfile(base64);
  };

  const profileInputList = [
    {
      head: "닉네임",
      type: "text",
      placeholder: "새로운 닉네임을 입력해주세요",
      value: username,
      handler: handleUsername,
      err: errNameMsg,
    },
    {
      head: "이메일",
      type: "email",
      placeholder: "새로운 이메일을 입력해주세요",
      value: email,
      handler: handleEmail,
      err: errEmailMsg,
    },
    {
      head: "비밀번호 수정",
      type: "password",
      placeholder: "새로운 비밀번호를 입력해주세요",
      value: password,
      handler: handlePassword,
      err: errPWMsg,
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
        putUserInfo({ username, profile: location, email, password })
          .then(() => {
            navigate("/mypage/home");
            dispatch(
              isLoginAction({
                ...isLogin,
                username,
                profile: location,
                email,
                password,
              })
            );
          })
          .catch((err) => console.log(err));
      });
    } else {
      putUserInfo({ username, email, password })
        .then(() => {
          navigate("/mypage/home");
          dispatch(
            isLoginAction({
              ...isLogin,
              username,
              email,
              password,
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleResign = () => {
    delUserInfo()
      .then(() => {
        signOut().then(() => {
          dispatch(isLoginAction(false));
          dispatch(isPointAction(false));
        });
      })
      .catch((err) => console.log(err));
  };

  const handleModal = () => {
    setModal(!modal);
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
        label="회원정보 수정"
        handleClick={handleUserInfo}
        disabled={disabled}
      />
      <ResignContainer>
        <h2>회원탈퇴</h2>
        <p>
          저희 이거 책임 못집니다. 포인트 다 잃어요 괜찮아요? 하... 후회할텐데
        </p>
        <Common type="resign" label="회원탈퇴" handleClick={handleModal} />
        {modal && (
          <Modal
            handleModal={handleModal}
            handleModalFunc={handleResign}
            type="resign"
          />
        )}
      </ResignContainer>
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

const ResignContainer = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
