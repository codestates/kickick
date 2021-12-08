import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import styled from "styled-components";

import { mailCheck } from "../../apis/auth"
import mailSuccess from "../../assets/images/mailSuccess.png"

export default function MailAuth() {
  const navigate = useNavigate();
  const params = useParams();

  const [isSuccess, setIsSuccess] = useState(null)

  useEffect(() => { 
    mailCheck(params.username)
      .then((res) => {
        console.log(res)
        if (res.data.message === "ok") {
          setIsSuccess(true);
        }
      })
      .catch(() => navigate("/error", { replace:true }));
  },[])

  console.log("params: ", params)
  return (
    <Container isSuccess={isSuccess}>
      <BackImg src={mailSuccess} alt="appointment letter" />
      <Title>임명장</Title>
      <Context>
        상기 용사는 이메일을 기반으로 로그인에 성공하였으므로 이에 상장을
        수여함.
      </Context>
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  min-height: 79vh;
  visibility: ${({ isSuccess }) => (isSuccess ? "visible" : "hidden")};
`;

const Title = styled.div`
  font-size: 5rem;
  z-index: 2;
`;

const Context = styled.div`
  font-size: 2rem;
  z-index: 2;
`;

const BackImg = styled.img`
  position:absolute;
  transform:rotate(90deg);
`;