import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getComments, createComments } from "../../../apis/comments";

import { PostCommentInput, PostCommentItem, RectLoading } from "../../";
import { dateConverter } from "../../../commons/utils/dateConverter";

export default function PostComment({ post_id }) {
  const postInfo = useSelector((state) => state.postInfo);
  const [cmt, setCmt] = useState({ data: [] });
  const [loading, setLoading] = useState(true);

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
        console.log(data.data);
        // setCmt(
        //   cmt.data.unshift({
        //     user: {
        //       username: data.data.username,
        //     },
        //     created_at: dataConverter(data.data.created_at.split("T")[0])
        //     content: data.data.content,
        //   })
        // );
      })
      .catch((err) => console.log(err.response));
    setValue("");
  };
  useEffect(() => {
    getComments(postInfo.data.post_id)
      .then((data) => setCmt(data.data))
      .then(() => setLoading(false))
      .catch((err) => console.error(err.response));
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
        댓글 <strong>{cmt.count}</strong>
      </H3>
      {cmt.data.map((el, idx) => (
        <PostCommentItem key={idx} item={el} />
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
