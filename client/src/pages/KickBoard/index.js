import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getPostsList } from "../../apis/posts";

import { CardBox, TotalSearch, KickConfirm, Common } from "../../components";

import {
  getCategoryAction,
  resetTag,
  goBack,
} from "../../store/actions/postadd";
import { getListAction } from "../../store/actions/postadd/boardList";
import { resetSearchReducerAction } from "../../store/actions/postsearch";

export default function KickBoard() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiCategory = useSelector((state) => state.postAdd.category);
  const { postsearch, onoff } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!onoff) {
      dispatch(resetSearchReducerAction());
      dispatch(resetTag());
    }
    dispatch(getCategoryAction(category, "킥"));
    dispatch(goBack(false));
  }, [category, dispatch, onoff]);

  useEffect(() => {
    getPostsList({
      category: apiCategory,
      post_name: postsearch.title,
      username: postsearch.writer,
      tag: postsearch.tag,
      limit: 20,
      favorite_count: postsearch.align === "인기" ? 1 : null,
      page_num: postsearch.selectPage,
    })
      .then((data) => {
        dispatch(getListAction(data.data));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, [
    dispatch,
    apiCategory,
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
      <KickConfirm />
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
