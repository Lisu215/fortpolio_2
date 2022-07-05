import React from "react";
import styled from "styled-components";
import airbnblogo from "../assets/airbnblogo.png";
import Search from "./search/Search";
import { Link } from "react-router-dom";
import Login from "./login/Login";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/portfolio_2">
        <HeaderLogo src={airbnblogo} alt="airbnb logo" />
      </Link>
      <Search />
      <Login />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 15rem 0.5rem 15rem;
  background-color: #ffffff;
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
  cursor: pointer;
  @media (max-width: 768px) {
    width: auto;
    height: 1rem;
  }
`;
