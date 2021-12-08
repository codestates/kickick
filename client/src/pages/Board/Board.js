import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";
import { resetTag } from "../../store/actions/postadd";
import { categoryName } from "../../commons/utils/categoryName";

import { TotalSearch, BoardBottom, BoardTop } from "../../components";
import BoardSkeleton from "./BoardSkeleton";

export default function Board({ setUpdate, update }) {
  const list = ["학습", "여가", "생활", "경제", "여행", "예술"];
  const { category } = useParams();
  const state = useSelector((state) => state.board);
  const stateOnoff = useSelector((state) => state.onoff);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectPage, setSelectPage] = useState(
    stateOnoff.goback ? (state.page ? state.page : 1) : 1
  );
  useEffect(() => {
    setUpdate(false);
    if (stateOnoff.goback) {
      getPostsList({
        category: categoryName(category),
        post_name: state.title.word,
        username: state.writer.word,
        tag: state.tag.word,
        limit: 20,
        page_num: state.page,
      })
        .then((data) =>
          dispatch(
            getList(data.data, state.title, state.writer, state.tag, state.page)
          )
        )
        .then(() => setLoading(false))
        .catch((err) => console.log(err.response));
    } else {
      dispatch(resetTag());
      getPostsList({ category: categoryName(category), limit: 20 })
        .then((data) => {
          setSelectPage(1);
          dispatch(getList(data.data));
        })
        .then(() => setLoading(false))
        .catch((err) => console.log(err.response));
    }
  }, [update, loading]);
  if (list.indexOf(category) === -1) return <BoardSkeleton />;
  if (loading) return <BoardSkeleton />;
  return (
    <>
      <BoardTop list={list} category={category} />
      <Container>
        <BoardContainer>
          <TotalSearch
            category={categoryName(category)}
            setSelectPage={setSelectPage}
            setLoading={setLoading}
          />
          <BoardBottom
            category={categoryName(category)}
            freeCategory={category}
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
    flex-direction: column-reverse;
    width: 64rem;
  }

  @media ${({ theme }) => theme.device.notebookS} {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.notebookS} {
    flex-direction: column;
    width: 100%;
  }
`;
