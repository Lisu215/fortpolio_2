import React from "react";
import styled from "styled-components";
import City from "../components/City";

const Home = () => {
  return (
    <Container>
      <City />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 7rem 10rem 1rem 10rem;
  @media (max-width: 768px) {
    padding: 6rem 0 1rem 0;
  }
`;
