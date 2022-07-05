import React from "react";
import styled from "styled-components";
import DetailMain from "../components/detail/DetailMain";

const Detail = () => {
  return (
    <Container>
      <DetailMain />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  padding: 7rem 25rem 1rem 25rem;
`;
