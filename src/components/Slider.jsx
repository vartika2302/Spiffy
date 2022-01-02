import styled from "styled-components";
import React, { useState } from "react";
import { sliderItems } from "../data";
import {mobile} from '../responsive';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const ArrowBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff9f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Arrow = styled.img`
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1s all ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bgcolor};
  ${mobile({flexDirection: 'column'})}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 20px;
  margin-top: 30px;
  ${mobile({height:"50%",marginLeft:"-30px"})}
`;
const Image = styled.img`
  height: 90%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 55px;
  margin-right: 5px;
  ${mobile({display:"flex",flexDirection:"column",})}
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({fontSize:"50px",textAlign:"center"})}
`;
const Description = styled.p`
  margin: 40px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({fontSize: "18px",textAlign:"center",letterSpacing: "2px"})}
`;
const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({fontSize: "18px", padding: "8px 0",margin:"-10px 0 10px"})}
`;
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <ArrowBox direction="left" onClick={() => handleClick("left")}>
        <Arrow src="https://cdn-user-icons.flaticon.com/49697/49697799/1640726812749.svg?token=exp=1640727714~hmac=1b9f9f1e79e764cd0acdb0a5ccb8716c" />
      </ArrowBox>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bgcolor={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <ArrowBox direction="right" onClick={() => handleClick("right")}>
        <Arrow src="https://cdn-icons-png.flaticon.com/512/709/709586.png" />
      </ArrowBox>
    </Container>
  );
}
