import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import NoImage from "./assets/no_image.png";

const App = () => {
  const [hotel, setHotel] = useState([]);

  const getHotel = async () => {
    const response = await axios.get(
      "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay?ServiceKey=X3zhrK0dZx3E4JIXLnKYIFjHt33JAoW9AbnDadbHw6OOEYenEIx0hVOMelI0eB3MdGfABNP3SOGK9sGlEFKdqw%3D%3D&areaCode=1&sigunguCode=1&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=12&pageNo=1"
    );
    setHotel(response.data.response.body.items.item);
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <div>
      <Header />
      <h1>오늘의 숙소</h1>
      <HotelList>
        {hotel.map((item) => (
          <HotelItem key={item.contentid}>
            <HotelImage
              src={item.firstimage ? item.firstimage : NoImage}
              alt={item.title}
            />
            <HotelInfo>
              <HotelTitle>{item.title}</HotelTitle>
              <HotelAddress>{item.addr1}</HotelAddress>
              <HotelTel>{item.tel}</HotelTel>
            </HotelInfo>
          </HotelItem>
        ))}
      </HotelList>
    </div>
  );
};

export default App;

const HotelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem 10rem 0.5rem 10rem;
  list-style: none;
`;

const HotelItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  width: 350px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0.5rem 0;
  }
`;

const HotelImage = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const HotelInfo = styled.div`
  padding: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const HotelTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
`;

const HotelAddress = styled.p`
  font-size: 0.9rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const HotelTel = styled.p`
  font-size: 0.9rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0;
  }
`;
