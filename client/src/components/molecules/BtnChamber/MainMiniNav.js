import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import Saturn from "../../../assets/images/planet/art.png"
// import moon from "../../../assets/images/planet/economy.png";
// import earth from "../../../assets/images/planet/leisure.png";
// import Mars from "../../../assets/images/planet/life.png";
// import Uranus from "../../../assets/images/planet/studyplanet.png";
// import sun from "../../../assets/images/planet/trip.png";
import redGirl from "../../../assets/images/people/7.png";
import whiteGuy from "../../../assets/images/people/6.png";
import redhatGirl from "../../../assets/images/people/5.png";
import suitGuy from "../../../assets/images/people/4.png";
import checkGuy from "../../../assets/images/people/3.png";
import stranger from "../../../assets/images/icon/profileinfoicon.png";
import grass from "../../../assets/images/grass.png";
import cloud5 from "../../../assets/images/cloud/cloud5.png";

export default function MainMiniNav() {
  const navigate = useNavigate();
  const peopleList = [
    ["학습", suitGuy],
    ["여가", checkGuy],
    ["생활", whiteGuy],
    ["경제", redGirl],
    ["여행", stranger],
    ["예술", redhatGirl],
  ];

  return (
    <Container>
      <ModeContainer>
        <CloudUp left={0} src={cloud5} alt="cloud" />
        <CloudDown left={10} src={cloud5} alt="cloud" />
        <CloudUp left={23} src={cloud5} alt="cloud" />
        <CloudDown left={37} src={cloud5} alt="cloud" />
        <CloudUp left={50} src={cloud5} alt="cloud" />
        <CloudDown left={63} src={cloud5} alt="cloud" />
        <CloudUp left={76} src={cloud5} alt="cloud" />
        {peopleList.map((el) => (
          <BtnFrame key={el[0]} onClick={() => navigate(`/kickboard/${el[0]}`)}>
            <BtnName>{el[0]}</BtnName>
            <People src={el[1]} alt="people" />
          </BtnFrame>
        ))}
        <Grass src={grass} alt="grass" />
      </ModeContainer>
    </Container>
  );
}

const Container = styled.div``;

const ModeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 80vw;
  height: 10vw;
  background-color: #049be5;
  overflow: hidden;
`;

const BtnFrame = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.jua};
  z-index: 3;
`;

const BtnName = styled.p`
  font-size: 1.2vw;
  pointer-events: none;
`;

const People = styled.img`
  width: 6vw;
  height: 8vw;
  pointer-events: none;
`;

const Grass = styled.img`
  position: absolute;
  bottom: -1vw;
  width: 80vw;
  pointer-events: none;
`;

const CloudUp = styled.img`
  position: absolute;
  top: 0.5vw;
  left: ${({ left }) => `${left}vw`};
  width: 7vw;
  z-index: 1;
  pointer-events: none;
`;

const CloudDown = styled(CloudUp)`
  top: 1.7vw;
`;
