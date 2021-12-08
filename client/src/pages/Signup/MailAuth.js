import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import styled from "styled-components";

import { mailCheck } from "../../apis/auth"
import mailSuccess from "../../assets/images/mailSuccess.png"
import stamp from "../../assets/images/stamp.png";

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

  console.log("params: ", params.username)
  return (
    <Container isSuccess={isSuccess}>
      <BackImg src={mailSuccess} alt="appointment letter" />
      <Frame onClick={() => navigate("/", { replace: true })}>
        <Title>임명장</Title>
        <Name>성명 : {params.username}</Name>
        <Context>상기 인물은 이메일 테스트를 성공적으로 수행한 바</Context>
        <Context>차후 임무를 수행함에 있어 부족함이 없다고 판단하여</Context>
        <Context>정식 우주비행사로 임명함.</Context>
        <Stamp src={stamp} alt="stamp" />
        <Contribute>INOVATION & GEEK</Contribute>
        <ContributeName>
          <Contribute>인사담당</Contribute> 한 태 규
        </ContributeName>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  min-height: 79vh;
  visibility: ${({ isSuccess }) => (isSuccess ? "visible" : "hidden")};
`;

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55vw;
  height: 35vw;
  padding: 5vw 2vw 0;
  z-index: 2;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 5vw;
`;

const Name = styled.p`
  align-self: flex-end;
  margin: 0.3vw 1vw 0 0;
  font-size: 1.5vw;
`;

const Context = styled.p`
  margin: 0.3vw;
  font-size: 2vw;

  :nth-child(3) {
    margin-top: 2vw;
  }
`;

const Contribute = styled.span`
  margin-top:4vw;
  font-size: 1.4vw;
  font-weight: 600;
  z-index: 4;
`;

const ContributeName = styled.p`
  font-size: 2.2vw;
  z-index: 4;
`;

const BackImg = styled.img`
  position: absolute;
  height: 60vw;
  width: 40vw;
  transform: rotate(90deg);
`;

const Stamp = styled.img`
  position: absolute;
  bottom: 4vw;
  right: 18vw;
  width: 7vw;
  opacity: 0.9;
  z-index: 3;
`;