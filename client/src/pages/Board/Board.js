import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";
import { getCategoryAction, resetTag } from "../../store/actions/postadd";

import { TotalSearch, BoardBottom, BoardTop } from "../../components";
import BoardSkeleton from "./BoardSkeleton";

export default function Board() {
  const { category } = useParams();

  const apiCategory = useSelector((state) => state.postAdd.category);
  const state = useSelector((state) => state.board);
  const stateOnoff = useSelector((state) => state.onoff);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectPage, setSelectPage] = useState(
    stateOnoff.goback ? (state.page ? state.page : 1) : 1
  );

  useEffect(() => {
    dispatch(getCategoryAction(category));
  }, [category, dispatch]);

  useEffect(() => {
    if (stateOnoff.goback) {
      getPostsList({
        category: apiCategory,
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
      getPostsList({ category: apiCategory, limit: 20 })
        .then((data) => dispatch(getList(data.data)))
        .then(() => setLoading(false))
        .catch((err) => console.log(err.response));
    }
  }, [apiCategory, loading]);

  if (loading) return <BoardSkeleton />;
  return (
    <>
      <BoardTop />
      <Container>
        <BoardContainer>
          <TotalSearch setSelectPage={setSelectPage} setLoading={setLoading} />
          <BoardBottom selectPage={selectPage} setSelectPage={setSelectPage} />
        </BoardContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 64rem;

  @media ${({ theme }) => theme.device.notebookS} {
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
