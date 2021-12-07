import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createFavorites, delFavorites } from "../../../apis/favorites";
import { goBack } from "../../../store/actions/postadd";
import { IconBox } from "../../";

export default function IconContainer() {
  const { post_id } = useParams();
  const { board, postInfo, userInfo } = useSelector((state) => state);
  const [heart, setHeart] = useState(
    postInfo.data.favorite === "true" ? true : false
  );
  const category = () => {
    let idx = postInfo.data.category.indexOf("_");
    return postInfo.data.category.slice(0, idx);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label === "arrow") {
      if (!board.data) {
        navigate(`/board/${category()}`);
      } else {
        dispatch(goBack(true));
        navigate(`/board/${category()}`);
      }
    } else if (label === "edit") {
      navigate(`/myeditboard/${category()}/${post_id}`);
    } else if (label === "heart") {
      createFavorites(post_id)
        .then((data) => {
          console.log(data.data);
          setHeart(true);
        })
        .catch((err) => console.log(err.response));
    } else if (label === "red") {
      delFavorites(post_id)
        .then((data) => {
          console.log(data.data);
          setHeart(false);
        })
        .catch((err) => console.log(err.response));
    }
  };

  console.log(typeof postInfo.data.favorite);
  return (
    <Container>
      <IconBox label="arrow" handleClick={handleClick} />
      {postInfo.data.user.username === userInfo.username ? (
        <IconBox label="edit" handleClick={handleClick} />
      ) : heart ? (
        <IconBox label="red" handleClick={handleClick} />
      ) : (
        <IconBox label="heart" handleClick={handleClick} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
