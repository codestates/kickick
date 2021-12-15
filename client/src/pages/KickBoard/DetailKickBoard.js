import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { DetailBoardTop, PostComment } from "../../components";

import { getPostsInfo } from "../../apis/posts";
import { getKicksInfo } from "../../apis/kicks";

import {
  getPostInfoAction,
  getKickInfoAction,
} from "../../store/actions/postinfo";

export default function DetailBoard({ themeCode }) {
  const dispatch = useDispatch();
  const { postInfo } = useSelector((state) => state.persist);
  const { post_id, kick_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfoAction(data.data.data));
        getKicksInfo(kick_id)
          .then((data) => {
            dispatch(getKickInfoAction(data.data.data.content));
          })

          .catch((err) => console.log(err.response));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, [dispatch, post_id, kick_id]);

  if (loading) return <Temporary />;

  return (
    <Container>
      <RigthContainer>
        <DetailBoardTop postInfo={postInfo} type="kick" themeCode={themeCode} />
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
  padding-top: 3rem;
`;

const RigthContainer = styled.div`
  width: 40.5rem;
  z-index: 1;
`;

const Temporary = styled.div`
  height: 100vh;
`;
