import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  ${mobile({textAlign:"center"})}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column",alignItems:"center"})}
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  margin-right: 10px;
  padding: 10px;
  ${mobile({padding:"8px"})}
`;
const Option = styled.option`
  padding: 40px;
`;

const FilterText = styled.p`
  margin-right: 5px;
  font-weight: bold;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Violet</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
