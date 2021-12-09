import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { IconBox } from "../..";

import { getPostsList } from "../../../apis/posts";
import { getComments } from "../../../apis/comments";
import { getFavorites } from "../../../apis/favorites";

import {
  getFavoritesAction,
  getMyPostAction,
  getMyCommentAction,
} from "../../../store/actions/mypage";

import {
  selectPageAction,
  selectDivPageAction,
} from "../../../store/actions/pagination";
import { getList } from "../../../store/actions/postadd/boardList";
import { goBack } from "../../../store/actions/postadd";

export default function Pagination({ count }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const boardState = useSelector((state) => state.board);
  const apiCategory = useSelector((state) => state.postAdd.category);

  const { selectPage, selectDivPage, limitPage } = useSelector(
    (state) => state.pagination
  );

  const totalPage = count !== 0 ? Math.ceil(count / 20) : 1;
  const dividPage = Math.ceil(totalPage / limitPage);
  const firstPage = limitPage * (selectDivPage + 1) - (limitPage - 1);

  let lastPage = limitPage * (selectDivPage + 1);
  if (totalPage < lastPage) {
    lastPage = totalPage;
  }
  const handleLeftIdx = () => {
    if (selectPage === 1) return;
    if (selectPage === firstPage) {
      dispatch(selectDivPageAction(selectDivPage - 1));
    }
    dispatch(selectPageAction(selectPage - 1));
  };
  const handleRightIdx = () => {
    if (selectPage === totalPage) return;
    if (
      selectPage === lastPage &&
      selectPage < totalPage &&
      selectDivPage < dividPage
    ) {
      dispatch(selectDivPageAction(selectDivPage + 1));
    }
    dispatch(selectPageAction(selectPage + 1));
  };
  const handleDubleLeft = () => {
    if (selectDivPage === 0) return;
    dispatch(selectDivPageAction(selectDivPage - 1));
    dispatch(selectPageAction(selectPage - limitPage));
  };
  const handleDubleRight = () => {
    if (selectDivPage + 1 >= dividPage) return;
    dispatch(selectDivPageAction(selectDivPage + 1));
    dispatch(
      selectPageAction(() => {
        if (selectPage + limitPage > totalPage) {
          return totalPage;
        } else {
          return selectPage + limitPage;
        }
      })
    );
  };

  const handleClickNum = (idx) => {
    dispatch(selectPageAction(idx + 1 + selectDivPage * limitPage));
  };

  useEffect(() => {
    if (pathname === "/mypage/mypost") {
      getPostsList({ page_num: selectPage })
        .then((data) => {
          dispatch(getMyPostAction(data));
        })
        .catch((err) => console.log(err));
    } else if (pathname === "/mypage/mycomment") {
      getComments(null, null, selectPage)
        .then((data) => dispatch(getMyCommentAction(data)))
        .catch((err) => console.log(err));
    } else if (pathname === "/mypage/favorites") {
      getFavorites(null, null, selectPage)
        .then((data) => dispatch(getFavoritesAction(data)))
        .catch((err) => console.log(err));
    } else {
      getPostsList({
        category: apiCategory,
        post_name: boardState.title.word,
        username: boardState.writer.word,
        tag: boardState.tag.word,
        limit: 20,
        page_num: selectPage,
      })
        .then((data) =>
          dispatch(
            getList(
              data.data,
              boardState.title,
              boardState.writer,
              boardState.tag,
              selectPage
            )
          )
        )
        .then(() => dispatch(goBack()))
        .catch((err) => console.log(err.response));
    }
  }, [apiCategory, selectPage]);

  return (
    <Container>
      <IconBox label="doubleleft" handleClick={handleDubleLeft} />
      <IconBox label="left" handleClick={handleLeftIdx} />
      {Array(lastPage % limitPage === 0 ? limitPage : lastPage % limitPage)
        .fill(0)
        .map((el, idx) => {
          return (
            <PageNum
              key={idx}
              onClick={() => handleClickNum(idx)}
              isActive={idx + 1 + selectDivPage * limitPage === selectPage}
            >
              {idx + 1 + selectDivPage * limitPage}
            </PageNum>
          );
        })}
      <IconBox label="right" handleClick={handleRightIdx} />
      <IconBox label="doubleright" handleClick={handleDubleRight} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const PageNum = styled.div`
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#222222")};
  background-color: ${({ isActive }) => (isActive ? "#0c0c42" : "#ffffff")};
  cursor: pointer;
`;
