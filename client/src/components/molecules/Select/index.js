import React from "react";
import styled from "styled-components";

import IconText, { iconList } from "../../atoms/IconText";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Select({
  handleIcon,
  icon,
  isSelect,
  setIsSelect,
  category = "검색",
}) {
  return (
    <Container>
      {isSelect ? <FaAngleDown /> : <FaAngleRight />}
      <Selected onClick={() => setIsSelect(!isSelect)}>
        <IconText label={icon.label} />
      </Selected>
      {isSelect ? (
        <Options>
          {iconList
            .filter((el) => el.category === category)
            .filter((el) => el.label !== icon.label)
            .map((el) => (
              <IconText
                key={el.label}
                label={el.label}
                handleClick={() => handleIcon(el)}
              />
            ))}
        </Options>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

<<<<<<< HEAD
=======
  width: 7.7rem;
>>>>>>> 3d23d9046f88cdb610c9ab1d5e0703af4e309e97
  padding: 0 0.2rem;

  > svg {
    margin-right: 0.5rem;
  }
`;

const Selected = styled.div`
  display: flex;
  align-items: center;

  width: 5.8rem;
<<<<<<< HEAD
=======

>>>>>>> 3d23d9046f88cdb610c9ab1d5e0703af4e309e97
  border-radius: 0.1rem;
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1.7rem;
  width: 5.8rem;

<<<<<<< HEAD
  background-color: white;

  border-radius: 0.25rem;

=======
  width: 5.8rem;
  background-color: white;

  border-radius: 0.25rem;
>>>>>>> 3d23d9046f88cdb610c9ab1d5e0703af4e309e97
  box-shadow: 0.5px 0.5px 5px #eee;

  cursor: pointer;

  > div:hover {
    color: #ffffff;
    background-color: #0c0c42;
  }
`;
