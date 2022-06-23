import React from "react";
import styled from "styled-components";
import airbnblogo from "../assets/airbnblogo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={airbnblogo} alt="airbnb logo" />
      <HeaderTitle>Airbnb Clone</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 10rem 0.5rem 10rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;

const HeaderLogo = styled.img`
  width: auto;
  height: 4rem;
  @media (max-width: 768px) {
    width: auto;
    height: 1rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
`;
