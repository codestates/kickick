import React from "react";
import styled from "styled-components";

const postList = [
  {
    type: "mypagefavorite",
    context: [
      { style: { flex: 3 }, label: "제목" },
      { style: { flex: 4 }, label: "태그" },
      { style: { flex: 1 }, label: "글쓴이" },
      { style: { flex: 2 }, label: "날짜" },
    ],
  },
  {
    type: "mypagemypost",
    context: [
      { style: { flex: 3 }, label: "제목" },
      { style: { flex: 4 }, label: "태그" },
      { style: { flex: 1 }, label: "조회수" },
      { style: { flex: 2 }, label: "날짜" },
    ],
  },
  {
    type: "mypagemycomment",
    context: [
      { style: { flex: 7 }, label: "댓글" },
      { style: { flex: 1 }, label: "좋아요" },
      { style: { flex: 2 }, label: "날짜" },
    ],
  },
  {
    type: "freepost",
    context: [
      { style: { flex: 3 }, label: "제목" },
      { style: { flex: 4 }, label: "태그" },
      { style: { flex: 1 }, label: "글쓴이" },
      { style: { flex: 1.6 }, label: "날짜" },
      { style: { flex: 0.8 }, label: "조회수" },
      { style: { flex: 0.8 }, label: "댓글" },
    ],
  },
];

export default function PostItem({ type }) {
  const { context } = postList.find((el) => el.type === type);
  return (
    <Container>
      {context.map((el) => (
        <div style={el.style}>{el.label}</div>
      ))}
      {/* <div style={{ flex: 3 }}>대격변! 환상수호전!</div>
      
      <div style={{ flex: 4 }}>
         <span>#어그로</span>
         <span>#하드코딩</span>
        
      </div>
       <div style={{ flex: 1 }}>soso</div>
       <div style={{ flex: 2 }}>2021.11.29</div> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #dddddd;

  div {
    padding: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:not(div:nth-of-type(1)) {
    text-align: center;
  }

  span {
    margin: 0 0.5rem;
  }
`;
