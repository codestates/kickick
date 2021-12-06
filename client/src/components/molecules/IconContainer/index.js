import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { goBack } from "../../../store/actions/postadd";
import { IconBox } from "../../";

export default function IconContainer() {
  const params = useParams();
  const state = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label === "arrow") {
      if (!state.data) {
        navigate(`/board/${params.category}`);
      } else {
        dispatch(goBack(true));
        navigate(`/board/${params.category}`);
      }
    }
    if (label === "edit") {
      navigate(`/myeditboard/${params.category}/${params.post_id}`);
    }
  };
  return (
    <Container>
      <IconBox label="arrow" handleClick={handleClick} />
      <IconBox label="heart" />
      <IconBox label="edit" handleClick={handleClick} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
