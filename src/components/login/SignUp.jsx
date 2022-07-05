import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const SignUp = (props) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      props.setshowMenu(false);
      e.stopImmediatePropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <LoginModal ref={modalRef}>
      <UserLogin>
        <LoginTitle>로그인 또는 회원가입</LoginTitle>
        <LoginWrapper>
          <WelcomHome>에어비앤비에 오신 것을 환영합니다.</WelcomHome>
          <LoginInput>
            <LoginEmail
              type="text"
              placeholder="이메일을 입력하세요."
              name="idInput"
            />
            <LoginPwd
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="pwdInput"
            />
            <LoginText>
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
              데이터 요금이 부과됩니다. <TextDeco>개인정보 처리방침</TextDeco>
            </LoginText>
            <LoginBtn type="submit">계속</LoginBtn>
          </LoginInput>
        </LoginWrapper>
      </UserLogin>
    </LoginModal>
  );
};
export default SignUp;

const LoginModal = styled.article`
  position: relative;
  top: 10vh;
  right: 98vh;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px, rgba(0, 0, 0, 0) 2px 2px 3px 3px;
  z-index: 10;
`;

const UserLogin = styled.div`
  position: absolute;
  width: 550px;
  height: 440px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const LoginTitle = styled.header`
  padding: 1rem 0;
  text-align: center;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const LoginWrapper = styled.section`
  padding: 1rem;
`;

const WelcomHome = styled.h4`
  font-size: 1.4rem;
  color: black;
`;

const LoginInput = styled.form`
  padding: 1rem 0 0;
`;

const LoginEmail = styled.input`
  padding: 20px;
  width: 90%;
  border: 1px solid #b0b0b0;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
`;

const LoginPwd = styled.input`
  padding: 20px;
  margin-bottom: 20px;
  width: 90%;
  border: 1px solid #b0b0b0;
  border-radius: 0 0 8px 8px;
`;

const LoginText = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 15px;
  color: black;
`;

const TextDeco = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

const LoginBtn = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #ff385c;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #dd1162;
  }
`;
