import React, { useEffect, useState, useRef } from "react";
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
  const test = useRef();
  const { login } = useSelector((state) => state);
  const { postInfo } = useSelector((state) => state.persist);
  const [cmt, setCmt] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [plusCmt, setPlusCmt] = useState(0);
  const [limit, setLimit] = useState(1);
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
    if (!login.isLogin) return;
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

  //무한스크롤 스크롤 버전
  // const cmtFetch = (page) => {
  //   if (cmt.count === cmt.data.length) return;
  //   getComments(post_id, page)
  //     .then((data) => {
  //       let mergeCmt = data.data;
  //       mergeCmt = { ...cmt, ...mergeCmt };
  //       setCmt(mergeCmt);
  //       setLimit(limit + 1);
  //     })
  //     .catch((err) => console.log(err.response));
  // };

  // const handleScroll = useMemo(
  //   () =>
  //     throttle(() => {
  //       const scrollHeight = document.documentElement.scrollHeight;
  //       const scrollTop = document.documentElement.scrollTop;
  //       const clientHeight = document.documentElement.clientHeight;
  //       if (scrollTop + clientHeight >= scrollHeight) {
  //         setLoading(true);
  //         cmtFetch(10 * limit);
  //       }
  //       setLoading(false);
  //     }, 300),
  //   [limit]
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  //IntersectionObserver API
  useEffect(() => {
    setLoading(true);
    getComments(postInfo.post_id, limit * 10)
      .then((data) => {
        setCmt(data.data);
        setPlusCmt(0);
        setLoading(false);
      })
      .catch((err) => console.error(err.response));
  }, [limit]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-130px",
      threshold: 1,
    };
    let observer;

    if (test.current) {
      observer = new IntersectionObserver(handleTest, options);
      observer.observe(test.current);
    }
    return () => observer.disconnect(test.current);
  }, [loading]);

  const testFunc = () => {
    if (cmt.count === cmt.data.length || !cmt.count) return;
    else {
      setLimit(limit + 1);
    }
  };
  const handleTest = (entry) => {
    if (entry[0].isIntersecting) testFunc();
  };

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
      {loading && <RectLoading />}
      <div ref={test}></div>
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
