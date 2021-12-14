import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailBoardTop, PostComment, IconContainer } from "../../components";

import { getPostsInfo } from "../../apis/posts";

import { getPostInfoAction } from "../../store/actions/postinfo";

export default function DetailBoard({ type, themeCode }) {
  const { postInfo } = useSelector((state) => state.persist);
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
  }, [dispatch, post_id, type]);

  if (loading) return <Temporary />;

  return (
    <Container>
      <IconContainer themeCode={themeCode} />
      <RightContainer>
        <DetailBoardTop postInfo={postInfo} type={type} />
        <PostComment post_id={post_id} themeCode={themeCode} />
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 48rem;
  margin: 0 auto;

  .event_name {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .event_info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: gray;
  }
`;

const RightContainer = styled.div`
  width: 40.5rem;
  z-index: 1;
`;

const Temporary = styled.div`
  height: 100vh;
`;
