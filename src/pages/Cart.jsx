import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({flexDirection:"column"})}
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  width: 12%;
  font-weight: 500;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? " black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({width: "50%",padding:"10px 5px"})}
`;
const TopTexts = styled.div`
${mobile({
  margin:"20px 0"
})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 20px;

 
`;
const Bottom = styled.div`
display: flex;
${mobile({
  flexDirection:"column"
})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
  ${mobile({
    flexDirection:"column"
  })}
`;
const Image = styled.img`

`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    alignItems:"center"
  })}
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Add = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const Remove = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const Amount = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  border: 1px solid blue;
  width: 25px;
  text-align: center;
  border-radius: 5px;
 
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  ${mobile({
   marginBottom:"10px"
 })}
`;
const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  border: none;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 80vh;
  margin-top: 20px;
`;
const SummaryTitle = styled.h1`
font-weight: 500;
`;
const SummaryItem = styled.div`
margin: 20px 0;
display: flex;
justify-content: space-between;
font-size: ${props=>props.type==="total" && "30px"};
font-weight: ${props=>props.type==="total" && "500"};
`;
const SummaryItemText= styled.span``;
const SummaryItemPrice=styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 500;
font-size: 20px;
border: none;
cursor: pointer;
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SH9SanGCyiWN9biuPRJ1KtMMpwUQ2EUDkg&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>8798352603
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove src="https://cdn-icons-png.flaticon.com/128/659/659883.png" />
                  <Amount>1</Amount>
                  <Add src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SH9SanGCyiWN9biuPRJ1KtMMpwUQ2EUDkg&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>8798352603
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove src="https://cdn-icons-png.flaticon.com/128/659/659883.png" />
                  <Amount>1</Amount>
                  <Add src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
