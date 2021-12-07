import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditQuill,
  TitleInput,
  Common,
  TagInput,
  IconText,
} from "../../components";

import { getPostInfo } from "../../store/actions/postadd";
import { getPostsInfo, putPost } from "../../apis/posts";
import { delTags, createTags } from "../../apis/tags";

export default function MyEditBoard() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.postInfo);

  const { post_id, category } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(state.data.post_name);
  const [content, setContent] = useState(state.data.content);
  const [tagArr, setTagArr] = useState(
    state.data.tags
      .filter((el) => el.content !== category)
      .map((el) => el.content)
  );

  const handleBlur = (e) => {
    setTitle(e.target.value);
  };

  const handleQuill = () => {
    setContent(content);
  };

  const handleClick = () => {
    putPost(`${category}_자유`, title, content, null, post_id)
      .then(() => {
        state.data.tags
          .filter((el) => el.content !== category)
          .map((tag) => {
            delTags(post_id, tag.tag_id).catch((err) => err.response);
          });
      })
      .then(() => {
        createTags(post_id, [category, ...tagArr])
          .then(() => navigate(`/detailboard/${category}/${post_id}`))
          .catch((err) => console.log(err.response));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfo(data.data));
      })
      .then(setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);

  if (loading) return "";
  return (
    <Container>
      <TitleContainer>
        <IconText label={category} />
        <TitleInput padding="0.3rem" handleBlur={handleBlur} title={title} />
      </TitleContainer>
      <EditQuill
        image={false}
        content={content}
        setContent={setContent}
        handleQuill={handleQuill}
      />
      <TagInput tagArr={tagArr} setTagArr={setTagArr} category={category} />
      <BtnContainer>
        <Common label="수 정" type="bigger" handleClick={handleClick} />
      </BtnContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88rem;
  margin: 0 auto;
  gap: 1rem;
`;
const TitleContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  text-align: center;
`;
