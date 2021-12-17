import React, { useState } from "react";
import styled from "styled-components";

import { useScroll } from "../../../hooks/useScroll";
import { FaGithub, FaStream } from "react-icons/fa";
import tree from "../../../assets/images/FooterTree.png";

export default function Footer() {
  const scroll = useScroll();
  const member = [
    {
      name: "HAN TEA GYU",
      github: "https://github.com/snowone4426",
    },
    {
      name: "KIM SEON BIN",
      github: "https://github.com/he2mo",
    },
    {
      name: "SEOK CHANG HWAN",
      github: "https://github.com/Seok-CH",
    },
    {
      name: "HWANG MIN HWAN",
      github: "https://github.com/gozld5153",
    },
  ];
  const [isOpen, setIsOpen] = useState("");

  const naviOpener = (name) => {
    if (isOpen === name) {
      return setIsOpen("");
    }
    return setIsOpen(name);
  }

  return (
    <Container>
      <TreeImg src={tree} alt="tree" />
      <ContextContainer scroll={scroll.scrollDirection} isOpen={isOpen}>
        <Frame>
          <Untouchable>
            <Logo onClick={() => window.location.assign(`/`)}>KICK</Logo>
            <IntroduceTitle>소개</IntroduceTitle>
            <IntroduceContent>
              괴벽인가,혁신인가 당신의 개성을 드러내세요!
            </IntroduceContent>
            <CopyRight>© 2021 KICK. All rights reserved.</CopyRight>
          </Untouchable>
        </Frame>
        <Frame>
          <FooterNav>
            <FooterNavBtn onClick={() => naviOpener("board")}>
              게시판
              <SpeechBubble />
              <DropdownFooter>
                <div>학습</div>
                <div>여가</div>
                <div>생활</div>
                <div>경제</div>
                <div>여행</div>
                <div>예술</div>
              </DropdownFooter>
            </FooterNavBtn>
            <FooterNavBtn onClick={() => naviOpener("kick")}>
              킥 배우기
            </FooterNavBtn>
            <FooterNavBtn onClick={() => setIsOpen("")}>
              <FaStream />
            </FooterNavBtn>
          </FooterNav>
          {member.map((el) => (
            <MemberBox
              href={el.github}
              target="_blank"
              rel="noreferrer"
              key={el.name}
            >
              <FaGithub />
              <MemberInfo>{el.name}</MemberInfo>
            </MemberBox>
          ))}
        </Frame>
      </ContextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    position: fixed;
    bottom: 0;
    z-index: 99999;
  }
`;

const FooterNav = styled.ul`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    margin-top: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 0.8}rem`};
  }

  > :last-child {
    position: relative;
    top: -${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 0.15}rem`};
  }
`;

const FooterNavBtn = styled.li`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    position:relative;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 0.5}rem`};
    font-size: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 1.8}rem`};
    font-family: ${({ theme }) => theme.fontFamily.jua};
    white-space: nowrap;
    cursor: pointer;
  }
`;

const SpeechBubble = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    width: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 1}rem`};
    height: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 1}rem`};
    background-color: white;
    transform: rotate(45deg);
    z-index: 999;
  }
`;

const DropdownFooter = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    top: 2.5rem;
    /* left: 2.5rem; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 23}rem`};
    height: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 3.5}rem`};
    border-radius: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 0.5}rem`};
    color: black;
    background-color: white;
    z-index: 9999;
  }
`;

const TreeImg = styled.img`
  position: relative;
  top: 0.01rem;
  display: ${({ theme }) => (theme.type === "dark" ? "none" : "default")};
  width: 100vw;
  pointer-events: none;

  @media ${({ theme }) => theme.device.tablet} {
    display:none;
  }
`;

const ContextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 17}rem`};
  padding: 0 ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 6}rem`};
  color: ${({ theme }) => theme.color.footerFont};
  background-color: ${({ theme }) => theme.color.footerBack};
  overflow: hidden;

  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    bottom: ${({ isOpen, scroll, theme }) =>
      scroll === "down"
        ? `-${theme.fontSizes.base.split("rem")[0] * 7.3}rem`
        : isOpen
        ? 0
        : `-${theme.fontSizes.base.split("rem")[0] * 3.5}rem`};
    align-items: flex-start;
    height: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 8}rem`};
    padding: 0
      ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 1}rem`};
    border-radius: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 1}rem ${
        theme.fontSizes.base.split("rem")[0] * 1
      }rem 0 0`};
    background-color: ${({ theme }) => theme.color.smallFooterBack};
    transition: bottom 0.4s;
    z-index: 999;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
    color: ${({ theme }) => theme.color.back};
  }
`;

const Untouchable = styled.div`
  /* pointer-events: none; */
`;

const Logo = styled.p`
  font-size: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 6}rem`};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuy};
  cursor:pointer;

  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    top: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 0.7}rem`};
    color: ${({ theme }) => theme.color.back};
    font-size: ${({ theme }) =>
      `${theme.fontSizes.base.split("rem")[0] * 4}rem`};
  }
`;

const IntroduceTitle = styled.p`
  padding-bottom: ${({ theme }) =>
    `${theme.fontSizes.base.split("rem")[0] * 0.5}rem`};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-family: ${({ theme }) => theme.fontFamily.jua};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const IntroduceContent = styled(IntroduceTitle)`
  padding-bottom: ${({ theme }) =>
    `${theme.fontSizes.base.split("rem")[0] * 1.5}rem`};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const CopyRight = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.jua};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const MemberBox = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 2}rem`};
  color: ${({ theme }) => theme.color.footerFont};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const MemberInfo = styled.div`
  position: relative;
  top: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 0.13}rem`};
  margin: ${({ theme }) => `${theme.fontSizes.base.split("rem")[0] * 0.4}rem`};
  font-size: ${({ theme }) =>
    `${theme.fontSizes.base.split("rem")[0] * 1.3}rem`};
  font-family: ${({ theme }) => theme.fontFamily.luckiestGuy};
`;
