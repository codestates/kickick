import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import {
  EditQuill,
  TitleInput,
  Common,
  TagInput,
  IconBox,
} from "../../components";

import { getPostInfoAction } from "../../store/actions/postinfo";
import { getPostsInfo, putPost } from "../../apis/posts";
import { delTags, createTags } from "../../apis/tags";

export default function MyEditBoard() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.persist.postInfo);

  const { post_id, category } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(state.post_name);
  const [content, setContent] = useState(state.content);
  const [tagArr, setTagArr] = useState(
    state.tags.filter((el) => el.content !== category).map((el) => el.content)
  );

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuill = () => {
    setContent(content);
  };

  const handleClick = () => {
    putPost(`${category}_자유`, title, content, null, post_id)
      .then(() => {
        state.tags
          .filter((el) => el.content !== category)
          .forEach((tag) => {
            delTags(post_id, tag.tag_id).catch((err) => err.response);
          });
      })
      .then(() => {
        createTags(post_id, [category, ...tagArr])
          .then(() => navigate(`/detailboard/${post_id}`))
          .catch((err) => console.log(err.response));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfoAction(data.data));
      })
      .then(setLoading(false))
      .catch((err) => console.log(err.response));
  }, [dispatch, post_id]);

  if (loading) return "";
  return (
    <Container>
      <QullContainer>
        <DividBox>
          <TitleContainer>
            <TitleInput
              handleChange={handleChange}
              type="title"
              title={title}
            />
            <TagInput
              tagArr={tagArr}
              setTagArr={setTagArr}
              category={category}
            />
          </TitleContainer>
          <EditQuill
            image={false}
            content={content}
            setContent={setContent}
            handleQuill={handleQuill}
          />
          <BtnContainer>
            <IconBox
              label="arrow"
              handleClick={() => navigate(`/detailboard/${post_id}`)}
            />
            <Common label="수 정" type="bigger" handleClick={handleClick} />
          </BtnContainer>
        </DividBox>

        <DividBox>
          <TitleContainer style={{ marginBottom: "2rem" }}>
            <TitleBox>{title}</TitleBox>
          </TitleContainer>
          <ReactQuill
            value={content}
            readOnly={true}
            theme={"bubble"}
            style={{ widht: "43rem", paddingTop: "0.5rem" }}
          />
        </DividBox>
      </QullContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 90rem;
  margin: 0 auto;
  gap: 1rem;
`;
const TitleContainer = styled.div`
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const QullContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const DividBox = styled.div``;

const TitleBox = styled.div`
  width: 43rem;
  height: 2.8rem;
  padding-top: 0.5rem;
  font-size: 2.8rem;
  font-weight: bold;
`;
