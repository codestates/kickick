import React, { useState, useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";
import styled from "styled-components";

import { mailCheck } from "../../apis/auth"

export default function MailAuth() {
  const location = useLocation();
  const params = useParams();

  const [isSuccess, setIsSuccess] = useState(null)

  useEffect(() => { 
    mailCheck(params.username)
      .then((res) => {
        if (res.data.message === "ok") {
          setIsSuccess(true)
        }
      })
  },[])

  console.log("location: ", location, "params: ", params)
  return (
    <Container>
      {isSuccess ? "True":"False"}
    </Container>
  );
}

const Container = styled.div`
  font-size: 30rem;
`;
