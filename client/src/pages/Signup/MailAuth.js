import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import styled from "styled-components";

import { mailCheck } from "../../apis/auth"

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
    <Container isSuccess={isSuccess}>임명장</Container>
  );
}

const Container = styled.div`
  min-height: 79vh;
  font-size: 10rem;
  visibility: ${({ isSuccess }) => (isSuccess ? "visible" : "hidden")};
`;
