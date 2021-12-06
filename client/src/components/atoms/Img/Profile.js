import React from "react";
import styled from "styled-components";
import sampleImg from "../../../assets/images/whale.jpg";

const profileList = [
  { type: "comment", size: "1.5rem" },
  { type: "post", size: "1.5rem" },
  { type: "confirm", size: "2rem" },
  { type: "mypage", size: "7rem" },
  { type: "mypageedit", size: "10rem" },
];

export default function Profile({ type, src }) {
  const { size } = profileList.find((i) => i.type === type);

  return <Container size={size} src={sampleImg} alt="" />;
}

const Container = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  border-radius: 50%;
`;
