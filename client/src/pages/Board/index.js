import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";
import { resetTag } from "../../store/actions/postadd";

import {
  TotalSearch,
  BoardBottom,
  BoardTop,
  BoardTodayKicks,
} from "../../components/";

export default function Board({ boardCategory }) {
  const state = useSelector((state) => state.board);
  const stateOnoff = useSelector((state) => state.onoff);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectPage, setSelectPage] = useState(
    stateOnoff.goback ? (state.page ? state.page : 1) : 1
  );
  useEffect(() => {
    if (stateOnoff.goback) {
      getPostsList(
        boardCategory,
        state.title.word,
        state.writer.word,
        state.tag.word,
        20,
        state.page
      )
        .then((data) =>
          dispatch(
            getList(data.data, state.title, state.writer, state.tag, state.page)
          )
        )
        .then(() => setLoading(false))
        .catch((err) => console.log(err.response));
    } else {
      dispatch(resetTag());
      getPostsList(boardCategory, null, null, null, null, 20)
        .then((data) => dispatch(getList(data.data)))
        .then(() => setLoading(false))
        .catch((err) => console.log(err.response));
    }
  }, []);

  if (loading) return "";
  return (
    <>
      <BoardTop />
      <Container>
        <BoardTodayKicks />
        <BoardContainer>
          <TotalSearch
            boardCategory={boardCategory}
            setSelectPage={setSelectPage}
          />
          <BoardBottom
            boardCategory={boardCategory}
            selectPage={selectPage}
            setSelectPage={setSelectPage}
          />
        </BoardContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90rem;

  @media ${({ theme }) => theme.device.notebookL} {
    flex-direction: column;
    width: 64rem;
  }

  @media ${({ theme }) => theme.device.notebookS} {
    flex-direction: column;
    width: 100%;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;

  @media ${({ theme }) => theme.device.notebookS} {
    flex-direction: column;
    width: 100%;
  }
`;
