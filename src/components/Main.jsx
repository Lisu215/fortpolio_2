import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NoImage from "../assets/no_image.png";
import { BASE_URL, API_KEY, BASE2_URL } from "../api/OpenApi";
import { useNavigate } from "react-router-dom";

const Main = (city) => {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState([]);
  const [code, setCode] = useState(1);

  useEffect(() => {
    if (city.city === "서울") {
      setCode(1);
    }
    if (city.city === "경기") {
      setCode(31);
    }
    if (city.city === "인천") {
      setCode(2);
    }
    if (city.city === "대전") {
      setCode(3);
    }
    if (city.city === "대구") {
      setCode(4);
    }
    if (city.city === "광주") {
      setCode(5);
    }
    if (city.city === "부산") {
      setCode(6);
    }
    if (city.city === "제주") {
      setCode(39);
    }
  }, [city]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${BASE_URL}${API_KEY}areaCode=${code}${BASE2_URL}`
      );
      setHotel(result.data.response.body.items.item);
    };
    fetchData();
    console.log(hotel);
  }, [code]);

  return (
    <HotelList>
      {hotel.map((item) => (
        <HotelItem
          key={item.contentid}
          onClick={() => {
            navigate(`/detail/${item.contentid}`);
            window.scrollTo(0, 0);
          }}
        >
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
  );
};

export default Main;

const HotelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }
`;

const HotelItem = styled.li`
  width: 350px;
  height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  margin: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;

const HotelImage = styled.img`
  width: 300px;
  height: 350px;
  margin-top: 1rem;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HotelTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: bold;
  margin: 0.1;
  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const HotelAddress = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const HotelTel = styled.p`
  font-size: 0.9rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
