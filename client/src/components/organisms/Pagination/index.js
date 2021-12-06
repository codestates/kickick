import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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

export default function MyPagination({ count }) {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const limitPage = 10;
  const totalPage = count !== 0 ? Math.ceil(count / 20) : 1;
  const [selectPage, setSelectPage] = useState(1);
  const dividPage = Math.ceil(totalPage / limitPage);
  const [selectDividPage, setSelectDividPage] = useState(0);
  const firstPage = limitPage * (selectDividPage + 1) - (limitPage - 1);

  let lastPage = limitPage * (selectDividPage + 1);
  if (totalPage < lastPage) {
    lastPage = totalPage;
  }
  const handleLeftIdx = () => {
    if (selectPage === 1) return;
    if (selectPage === firstPage) {
      setSelectDividPage(selectDividPage - 1);
    }
    setSelectPage(selectPage - 1);
  };
  const handleRightIdx = () => {
    if (selectPage === totalPage) return;
    if (
      selectPage === lastPage &&
      selectPage < totalPage &&
      selectDividPage < dividPage
    ) {
      setSelectDividPage(selectDividPage + 1);
    }
    setSelectPage(selectPage + 1);
  };
  const handleDubleLeft = () => {
    if (selectDividPage === 0) return;
    setSelectDividPage(selectDividPage - 1);
    setSelectPage(selectPage - limitPage);
  };
  const handleDubleRight = () => {
    if (selectDividPage + 1 >= dividPage) return;
    setSelectDividPage(selectDividPage + 1);
    setSelectPage(() => {
      if (selectPage + limitPage > totalPage) {
        return totalPage;
      } else {
        return selectPage + limitPage;
      }
    });
  };

  const handleClickNum = (idx) => {
    setSelectPage(idx + 1 + selectDividPage * limitPage);
  };

  useEffect(() => {
    if (pathname === "/mypage/mypost") {
      getPostsList({ page_num: selectPage })
        .then((data) => {
          console.log("d");
          dispatch(getMyPostAction(data));
        })
        .catch((err) => console.log(err));
    } else if (pathname === "/mypage/mycomment") {
      getComments({ page_num: selectPage })
        .then((data) => dispatch(getMyCommentAction(data)))
        .catch((err) => console.log(err));
    }
  }, [selectPage]);

  return (
    <Container>
      <IconBox label="doubleleft" onClick={handleDubleLeft} />
      <IconBox label="left" onClick={handleLeftIdx} />
      {Array(lastPage % limitPage === 0 ? limitPage : lastPage % limitPage)
        .fill(0)
        .map((el, idx) => {
          return (
            <PageNum
              key={idx}
              onClick={() => handleClickNum(idx)}
              isActive={idx + 1 + selectDividPage * limitPage === selectPage}
            >
              {idx + 1 + selectDividPage * limitPage}
            </PageNum>
          );
        })}
      <IconBox label="right" onClick={handleRightIdx} />
      <IconBox label="doubleright" onClick={handleDubleRight} />
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
