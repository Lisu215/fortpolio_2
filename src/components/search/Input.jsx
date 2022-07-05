import React from "react";
import styled from "styled-components";

const Input = ({ width, title, children, onClick }) => {
  return (
    <SearchItemContainer width={width} onClick={onClick}>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </SearchItemContainer>
  );
};

export default Input;

const SearchItemContainer = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : `flex: 1;`)}
  padding: 14px 32px;
  border-radius: 32px;
  text-align: center;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  padding-bottom: 2px;
`;

const Description = styled.div`
  font-size: 13px;
  color: #717171;
  cursor: pointer;
`;
