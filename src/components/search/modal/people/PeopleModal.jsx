import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PeopleCount from "./PeopleCount";

const PeopleModal = (props) => {
  const modalRef = useRef();
  const [peopleCnt, setPeopleCnt] = useState(0);

  const plusPeopleCnt = () => {
    setPeopleCnt((peopleCnt) => peopleCnt + 1);
  };

  const minusPeopleCnt = () => {
    setPeopleCnt((peopleCnt) => peopleCnt - 1);
  };

  useEffect(() => {
    props.setCount(peopleCnt);
  });

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      props.setIsOpen(false);
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
    <Modal ref={modalRef}>
      <PeopleModalContainer>
        <PeopleCount
          title="성인"
          description="만 13세 이상"
          plusPeopleCnt={plusPeopleCnt}
          minusPeopleCnt={minusPeopleCnt}
        />
        <PeopleCount
          title="어린이"
          description="2~12세"
          plusPeopleCnt={plusPeopleCnt}
          minusPeopleCnt={minusPeopleCnt}
        />
        <PeopleCount
          title="유아"
          description="2세 미만"
          plusPeopleCnt={plusPeopleCnt}
          minusPeopleCnt={minusPeopleCnt}
        />
      </PeopleModalContainer>
    </Modal>
  );
};

export default PeopleModal;

const Modal = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px,
    rgba(0, 0, 0, 0.5) 2px 2px 3px 0px;
  z-index: 1;
`;

const PeopleModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  width: 395px;
  padding: 16px 32px;
  text-align: left;
  background-color: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 32px;
`;
