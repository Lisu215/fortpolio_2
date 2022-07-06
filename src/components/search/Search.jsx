import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import PeopleModal from "./modal/people/PeopleModal";
import Calendar from "./modal/date/Calendar";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchItemContainer>
      <Input title="위치">
        <StyledInput placeholder="어디로 여행가세요?" />
      </Input>
      <Divider />
      <Input title="날짜">
        <Calendar />
      </Input>
      <Divider />
      <Input title="인원" onClick={handleOpen}>
        {count === 0 ? "게스트를 선택하세요" : `게스트 ${count}명`}
      </Input>

      {isOpen && <PeopleModal setCount={setCount} setIsOpen={setIsOpen} />}
    </SearchItemContainer>
  );
};

export default Search;

const SearchItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 850px;
  height: 66px;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledInput = styled.input`
  text-align: center;
  border: none;
`;
const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: #dddddd;
`;
