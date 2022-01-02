import React from "react";
import {mobile} from '../responsive';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  ${mobile({alignItems:"center",paddingBottom:"5px"})}
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
  color: #222;
  font-size: 15.5px;
  word-spacing: 0.1rem;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 30px;
  ${mobile({display:"flex",flexDirection:"column",backgroundColor:"#fcf5f5",alignItems:"center",paddingBottom:"5px"})}
`;
const Title = styled.h1`
  margin-bottom: 30px;
  ${mobile({display:"flex",justifyContent:"center",margin:"0 auto 20px"})}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${mobile({paddingLeft:"40px"})}
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px;
  ${mobile({display:"flex",flexDirection:"column",alignItems:"flex-start"})}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${mobile({marginBottom: "20px"})}
`;

const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  ${mobile({width: "20px",height: "20px"})}
`;
const ContactDesc = styled.p``;
const Payment = styled.img`
margin: -15px;
height: 90px;
${mobile({marginBottom:"-60px"})}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SPIFFY.</Logo>
        <Description>
          Spiffy, India’s online fashion destination justifies its fashion
          relevance by bringing something new and chic to the table on the
          daily. Fashion trends seem to change at lightning speed, yet the
          Spiffy has managed to keep up without any hiccups. In addition, Spiffy
          has vowed to serve customers to the best of its ability by introducing
          its first-ever loyalty program.{" "}
        </Description>
        <SocialContainer>
          <SocialIcon src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670127.png?token=exp=1640778002~hmac=6d22d29780c531416d04a2f93b81d346" />

          <SocialIcon src="https://cdn-icons.flaticon.com/png/128/4138/premium/4138124.png?token=exp=1640777972~hmac=5fc566b6691f06702673e2c6125af49d" />

          <SocialIcon src="https://cdn-icons-png.flaticon.com/128/145/145802.png" />

          <SocialIcon src="https://cdn-icons-png.flaticon.com/128/220/220214.png" />
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactIcon src="https://cdn-icons.flaticon.com/png/128/2776/premium/2776067.png?token=exp=1640779009~hmac=2dd82cf9ceab6b3d02c2c175876fc65c" />
          <ContactDesc>620 street, Yashvananthapuram, Karnataka</ContactDesc>
        </ContactItem>
        <ContactItem>
          <ContactIcon src="https://cdn-icons-png.flaticon.com/128/890/890547.png" />
          <ContactDesc>+91 567 76 78 789</ContactDesc>
        </ContactItem>
        <ContactItem>
          <ContactIcon src="https://cdn-icons-png.flaticon.com/128/732/732200.png" />
          <ContactDesc>spiffy@gmail.com</ContactDesc>
        </ContactItem>
        <ContactItem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzGwP9hHcWjMzkmeQ0X_QR6frbpgKX9ndF7aLXG67Rl_I5kqDM1Np1e-UjUocQvlKHg&usqp=CAU" />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
