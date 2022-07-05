import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../api/OpenApi";
import axios from "axios";
import KakaoMap from "./KakaoMap";
const DetailMain = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState([]);
  const BASE_URL =
    "http://api.visitkorea.or.kr/openapi/service/rest/KorService";
  const hotelInfo = `${BASE_URL}/detailCommon?ServiceKey=${API_KEY}contentTypeId=32&contentId=${id}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(hotelInfo);
      setHotel(result.data.response.body.items.item);
    };
    fetchData();
  }, []);

  return (
    <DetailContainer>
      <HotelTitle>{hotel.title}</HotelTitle>
      <ImageMap>
        <HotelImage src={hotel.firstimage} alt="hotel" />
        <KakaoMap mapx={hotel.mapx} mapy={hotel.mapy} addr2={hotel.addr2} />
      </ImageMap>
      <HotelInfo>
        <div>주소: {hotel.addr1}</div>
        <div>전화번호: {hotel.tel}</div>
        <div>홈페이지: {hotel.homepage}</div>
      </HotelInfo>
      <HotelOverview>{hotel.overview}</HotelOverview>
    </DetailContainer>
  );
};

export default DetailMain;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const HotelTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const HotelImage = styled.img`
  width: 45%;
  height: auto;
  margin-right: 3rem;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const HotelOverview = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ImageMap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;
