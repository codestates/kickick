import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  CardBox,
  TotalSearch,
  KickConfirm,
  Common,
  InfiniteScroll,
} from "../../components";

import { getPostsList } from "../../apis/posts";

import { getCategoryAction, resetTag } from "../../store/actions/postadd";
import {
  getListAction,
  getListStackAction,
  resetListAction,
} from "../../store/actions/postlist";
import {
  resetSearchReducerAction,
  selectPageAction,
} from "../../store/actions/postsearch";

export default function KickBoard() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { kickboard, postsearch, postAdd } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [onScroll, setOnScroll] = useState(true);

  const handleLimit = () => {
    dispatch(selectPageAction(postsearch.selectPage + 1));
  };

  useEffect(() => {
    dispatch(resetSearchReducerAction());
    dispatch(resetTag());
    dispatch(resetListAction());
    dispatch(getCategoryAction(category, "킥"));
  }, [category, dispatch]);

  useEffect(() => {
    getPostsList({
      category: postAdd.category,
      post_name: postsearch.title,
      username: postsearch.writer,
      tag: postsearch.tag,
      limit: 10,
      favorite_count: postsearch.align === "인기" ? 1 : null,
      page_num: postsearch.selectPage,
    })
      .then((data) => {
        if (data.data.data.length === 0) {
          setOnScroll(false);
          if (postsearch.selectPage === 1) {
            dispatch(getListAction(data.data));
          } else {
            dispatch(getListStackAction(data.data));
          }
        } else {
          setOnScroll(true);
          if (postsearch.selectPage === 1) {
            dispatch(getListAction(data.data));
          } else {
            dispatch(getListStackAction(data.data));
          }
        }
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, [
    dispatch,
    postAdd.category,
    loading,
    postsearch.selectPage,
    postsearch.title,
    postsearch.tag,
    postsearch.writer,
    postsearch.align,
  ]);

  if (loading) return <div>d</div>;

  return (
    <Container>
      <Common handleClick={() => navigate(`/editkick/${category}`)} />
      <TotalSearch />
      <CardBox />
      {kickboard.modalState && <KickConfirm />}
      {onScroll && <InfiniteScroll callback={handleLimit} />}
    </Container>
  );
}

const Container = styled.div`
  margin: 10rem auto;

  @media ${({ theme }) => theme.device.desktop} {
    width: 88rem;
  }
  @media ${({ theme }) => theme.device.notebookL} {
    width: 66rem;
  }
  @media ${({ theme }) => theme.device.notebookS} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;
