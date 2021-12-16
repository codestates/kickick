import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { DetailBoardTop, PostComment } from "../../components";

import { getPostsInfo } from "../../apis/posts";
import { getKicksInfo } from "../../apis/kicks";

import {
  getPostInfoAction,
  getMainInfoAction,
} from "../../store/actions/postinfo";

export default function DetailBoard({ themeCode }) {
  const dispatch = useDispatch();
  const { kick_id } = useParams();
  const { postInfo } = useSelector((state) => state.persist);
  const [loading, setLoading] = useState(true);
  const [postId, setPostId] = useState();
  console.log(postInfo);
  useEffect(() => {
    getKicksInfo(kick_id)
      .then((data) => {
        dispatch(getMainInfoAction(data.data.data.content));

        setPostId(data.data.data.post_id);
        getPostsInfo(data.data.data.post_id)
          .then((data) => {
            dispatch(getPostInfoAction(data.data.data));
          })
          .catch((err) => console.log(err));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, [dispatch, kick_id]);

  if (loading) return <Temporary />;

  return (
    <Container>
      <RigthContainer>
        <DetailBoardTop postInfo={postInfo} type="kick" themeCode={themeCode} />
        <PostComment post_id={postId} />
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
