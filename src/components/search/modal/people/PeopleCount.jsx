import React, { useState } from "react";
import styled from "styled-components";

const PeopleCount = ({ title, description, plusPeopleCnt, minusPeopleCnt }) => {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    if (cnt > 0) {
      setCnt((cnt) => cnt - 1);
      minusPeopleCnt();
    } else {
      setCnt(0);
    }
  };

  return (
    <PeopleCountContainer>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <div style={{ marginTop: "0.2rem" }}>
        <CountButton onClick={handleClick}>-</CountButton>
        &nbsp;&nbsp;{cnt}&nbsp;&nbsp;
        <CountButton
          onClick={() => {
            setCnt((cnt) => cnt + 1);
            plusPeopleCnt();
          }}
        >
          +
        </CountButton>
      </div>
    </PeopleCountContainer>
  );
};

export default PeopleCount;

const PeopleCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #222222;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #717171;
`;

const CountButton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  cursor: pointer;
`;
