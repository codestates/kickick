import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { DetailBoardTop, PostComment, IconContainer } from "../../components";
import { getPostsInfo } from "../../apis/posts";
import { getPostInfo } from "../../store/actions/postadd";

export default function DetailBoard() {
  // 이거 화면 이동시에 최상단으로 이동시켜주는 함수 함 넣어봄
  const state = useSelector((state) => state.postInfo);
  const dispatch = useDispatch();
  const { post_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfo(data.data));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);

  if (loading) return "";

  return (
    <Container>
      <IconContainer />
      <RigthContainer>
        <DetailBoardTop state={state} />
        <PostComment post_id={post_id} />
      </RigthContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 48rem;
  margin: 0 auto;
`;

const RigthContainer = styled.div``;
