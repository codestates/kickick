import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import disableScroll from "disable-scroll";

import { delPost } from "../../../apis/posts";
import { createFavorites, delFavorites } from "../../../apis/favorites";
import { goBack } from "../../../store/actions/postadd";
import { IconBox, Modal } from "../../";

export default function IconContainer() {
  const [modal, setModal] = useState(false);
  const { post_id } = useParams();
  const { board, postInfo, login } = useSelector((state) => state);
  const [heart, setHeart] = useState(
    postInfo.favorite === "true" ? true : false
  );
  const category = () => {
    let idx = postInfo.category.indexOf("_");
    return postInfo.category.slice(0, idx);
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
        .then(() => {
          setHeart(true);
        })
        .catch((err) => console.log(err.response));
    } else if (label === "red") {
      delFavorites(post_id)
        .then(() => {
          setHeart(false);
        })
        .catch((err) => console.log(err.response));
    }
  };

  const handleModalOn = () => {
    setModal(true);
    disableScroll.on();
  };

  const handleModalOff = () => {
    setModal(false);
    disableScroll.off();
  };

  const handleDelPost = () => {
    setModal(false);
    disableScroll.off();
    delPost(post_id)
      .then((data) => {
        navigate(`/board/${category()}`);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <Container>
      <IconBox label="arrow" handleClick={handleClick} />
      {postInfo.user.username === login.isLogin.username ||
      login.isLogin.type === "admin" ? (
        <>
          <IconBox label="edit" handleClick={handleClick} />
          <IconBox label="postDel" handleClick={handleModalOn} />
        </>
      ) : heart ? (
        <IconBox label="red" handleClick={handleClick} />
      ) : (
        <IconBox label="heart" handleClick={handleClick} />
      )}
      {modal ? (
        <Modal
          handleModal={handleModalOff}
          handleModalFunc={handleDelPost}
          type="del"
        />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
