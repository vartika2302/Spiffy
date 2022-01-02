import React from "react";
import styled from "styled-components";

const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color:rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3e7f1;
  position: relative;
  &:hover ${Info}{
      opacity:1;
      cursor: pointer;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;
const Image = styled.img`
  height: 70%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover{
      background-color: rgba(360,360,360,0.8);
      transform: scale(1.1);

  }
`;
const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <IconImage src="https://cdn-icons-png.flaticon.com/128/833/833314.png" />
        </Icon>
        <Icon>
          <IconImage src="https://cdn-icons-png.flaticon.com/128/482/482631.png" />
        </Icon>
        <Icon>
          <IconImage src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" />
        </Icon>
      </Info>
    </Container>
  );
}
