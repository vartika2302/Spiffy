import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  height: 50px;
  ${mobile({height: "45px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  ${mobile({marginLeft: "20px",padding: "4px"})}
 
`;
const SearchIcon = styled.img`
  width: 15px;
  height: 15px;
  ${mobile({width: "14px", height: "14px"})}
`;
const Input = styled.input`
  border: none;
  ${mobile({width: "40px",fontSize: "10px"})}
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize: "28px",marginLeft: "35px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center",flex:"6"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: flex;
  margin-left: 15px;
  ${mobile({fontSize: "12px",marginLeft: "5px"})}
`;
const CartIcon = styled.img`
width: 32px;
height: 32px;
${mobile({width: "24px", height: "24px"})}
`;

const CartNumber = styled.span`
width: 18px;
height: 18px;
text-align: center;
position: absolute;
top: -5px;
right: -5px;
background-color: red;
border-radius: 50%;
${mobile({width: "14px",height: "14px"})}
`;
export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search"/>
            <SearchIcon src="https://cdn-user-icons.flaticon.com/49697/49697799/1640725770162.svg?token=exp=1640726671~hmac=6fcc2562801c409a49ce0c4417559b37" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SPIFFY.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <CartIcon src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838895.png?token=exp=1640725687~hmac=ae6777325e6b7b50e41b0ec1ae5f92dd" />
            <CartNumber>4</CartNumber>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
