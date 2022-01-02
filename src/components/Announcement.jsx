import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive';
const Container = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  ${mobile({fontSize: "12px",fontWeight: "400"})}
`;

export default function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}
