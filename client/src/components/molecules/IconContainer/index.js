import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { goBack } from "../../../store/actions/postadd";
import { IconBox } from "../../";

export default function IconContainer() {
  const [heart, setHeart] = useState(false);
  const params = useParams();
  const state = useSelector((state) => state.board);
  const postInfo = useSelector((stateInfo) => stateInfo.postInfo);
  const category = () => {
    let idx = postInfo.data.category.indexOf("_");
    return postInfo.data.category.slice(0, idx);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label === "arrow") {
      if (!state.data) {
        navigate(`/board/${category()}`);
      } else {
        dispatch(goBack(true));
        navigate(`/board/${category()}`);
      }
    } else if (label === "edit") {
      navigate(`/myeditboard/${category()}/${params.post_id}`);
    } else if (label === "heart") {
      setHeart(true);
    } else if (label === "red") {
      setHeart(false);
    }
  };
  return (
    <Container>
      <IconBox label="arrow" handleClick={handleClick} />
      {heart ? (
        <IconBox label="red" handleClick={handleClick} />
      ) : (
        <IconBox label="heart" handleClick={handleClick} />
      )}
      <IconBox label="edit" handleClick={handleClick} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
