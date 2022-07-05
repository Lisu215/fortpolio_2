import React, { useState } from "react";
import { BiMenu, BiUser } from "react-icons/bi";
import styled from "styled-components";
import SignUp from "./SignUp";

const Login = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleMenu = () => {
    setshowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div>
      <LoginContainer onClick={handleMenu}>
        <BiMenu />
        <BiUser />
      </LoginContainer>
      {showMenu && <SignUp setshowMenu={setshowMenu} />}
    </div>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  width: 50px;
  height: 50px;
  border-radius: 32px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;
