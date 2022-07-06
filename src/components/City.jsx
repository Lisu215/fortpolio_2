import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "../components/Main";

const cityList = [
  "서울",
  "경기",
  "인천",
  "대전",
  "대구",
  "광주",
  "부산",
  "제주",
];

const City = () => {
  const [city, setCity] = useState(cityList[0]);

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <div>
      <CityContainer>
        {cityList.map((item, index) => (
          <CityItem
            key={index}
            onClick={() => setCity(item)}
            city={city}
            item={item}
          >
            <CityImage
              src={`${process.env.PUBLIC_URL}/city/city${index}.jpg`}
              alt={item}
            />
            {item}
          </CityItem>
        ))}
      </CityContainer>
      <Main city={city} />
    </div>
  );
};

export default City;

const CityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CityItem = styled.div`
  width: 90px;
  height: 90px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  opacity: ${(props) => (props.city === props.item ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

const CityImage = styled.img`
  width: 100%;
  border-radius: 0.8rem;
`;
