import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 90%;
  height: 85vh;
  object-fit: cover;
  ${mobile({ height: "45vh", marginLeft: "15px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 40px;
  ${mobile({
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 30px 0;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 300;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  ${mobile({flexDirection:"column",alignItems:"center"})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({marginBottom: "10px"})}
`;
const FilterTitle = styled.p`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  justify-content: space-between;
  ${mobile({width:"70%"})}
`;
const Add = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
${mobile({width:"18px",height:"18px"})}
`;
const Remove = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  ${mobile({width:"18px",height:"18px"})}

`;
const Amount = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  border: 1px solid blue;
  width: 35px;
  text-align: center;
  border-radius: 5px;
 ${mobile({fontSize:"25px",width:"100px",height:"28px"})}
`;
const Button = styled.button`
  width: 50%;
  margin: 0 25px;
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: #f9d371;
  &:hover {
    border: 3px solid #f9d371;
    background: none;
  }
  ${mobile({width:"110%",margin:"20px 25px"})}
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Vintage Crusher Tee</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Remove src="https://cdn-icons-png.flaticon.com/128/659/659883.png" />
            <Amount>1</Amount>
            <Add src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
