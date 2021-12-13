import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailBoardTop, PostComment, IconContainer } from "../../components";

import { getPostsInfo } from "../../apis/posts";

import { getPostInfoAction } from "../../store/actions/postadd";

export default function DetailBoard({ type }) {
  const state = useSelector((state) => state.persist.postInfo);
  const dispatch = useDispatch();
  const { post_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfoAction(data.data.data));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, [dispatch, post_id]);

  if (loading) return <Temporary />;

  return (
    <Container>
      {type === "kick" ? null : <IconContainer />}
      <RigthContainer>
        <DetailBoardTop state={state} type={type} />
        <PostComment post_id={post_id} />
      </RigthContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 48rem;
  margin: 0 auto;
`;

const RigthContainer = styled.div`
  width: 40.5rem;
  z-index: 1;
`;

const Temporary = styled.div`
  height: 100vh;
`;
