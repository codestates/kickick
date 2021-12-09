import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { set, throttle } from "lodash";

import {
  getComments,
  createComments,
  delComments,
} from "../../../apis/comments";
import { PostCommentInput, PostCommentItem, RectLoading } from "../../";

export default function PostComment({ post_id }) {
  const postInfo = useSelector((state) => state.postInfo);
  const [cmt, setCmt] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [plusCmt, setPlusCmt] = useState(0);
  const [limit, setLimit] = useState(2);
  //textarea
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (e.target.value.length <= 200) {
      setValue(e.target.value);
    } else {
      return;
    }
  };

  const handleClick = () => {
    createComments(post_id, value)
      .then((data) => {
        let dummy = cmt.data.slice();
        let obj = {};
        obj.comment_id = data.data.data.comment_id;
        obj.user = { username: data.data.data.username };
        obj.created_at = data.data.data.created_at;
        obj.content = data.data.data.content;
        dummy = [obj, ...dummy];
        setCmt({ ...cmt, data: dummy });
      })
      .then(() => setPlusCmt(plusCmt + 1))
      .catch((err) => console.log(err.response));
    setValue("");
  };

  //comment 지우기
  const handleDelComment = (id) => {
    delComments(id)
      .then(() => {
        const idx = cmt.data.findIndex((el) => el.comment_id === id);
        const newData = [...cmt.data.slice(0, idx), ...cmt.data.slice(idx + 1)];
        setCmt({ ...cmt, data: newData });
        setPlusCmt(plusCmt - 1);
      })
      .catch((err) => console.log(err.response));
  };

  const cmtFetch = (page) => {
    if (cmt.count === cmt.data.length) return;
    getComments(post_id, page)
      .then((data) => {
        let mergeCmt = data.data;
        mergeCmt = { ...cmt, ...mergeCmt };
        setCmt(mergeCmt);
        setLimit(limit + 1);
      })
      .catch((err) => console.log(err.response));
  };

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          cmtFetch(10 * limit);
        }
      }, 500),
    [limit]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(async () => {
    await getComments(postInfo.post_id)
      .then((data) => {
        setCmt(data.data);
      })
      .catch((err) => console.error(err.response));
    setLoading(false);
  }, [loading]);

  if (loading)
    return (
      <Container>
        <PostCommentInput
          handleClick={handleClick}
          value={value}
          handleChange={handleChange}
        />
        <H3>
          댓글 <strong></strong>
        </H3>
        <RectLoading />
      </Container>
    );
  return (
    <Container>
      <H3>댓글달기</H3>
      <PostCommentInput
        handleClick={handleClick}
        value={value}
        handleChange={handleChange}
      />
      <H3>
        댓글 <strong>{cmt.count + plusCmt}</strong>
      </H3>
      {cmt.data.map((el, idx) => (
        <PostCommentItem
          key={idx}
          item={el}
          handleDelComment={handleDelComment}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: skyblue;
  }
`;

const H3 = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
