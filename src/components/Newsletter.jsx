import styled from "styled-components";
import {mobile} from '../responsive';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
font-size: 70px;
letter-spacing: 0.3rem;
margin-bottom: 20px;
${mobile({fontSize: "55px"})}
`
const Description = styled.div`
font-size: 24px;
font-weight: 400;
margin-bottom: 30px;
${mobile({fontSize:"20px",textAlign:"center"})}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({justifyContent:"center"})}

`;
const Input = styled.input`
border: none;
font-size: 17px;
padding: 10px;
outline: none;
letter-spacing: 0.1rem;
flex: 7;
`;
const Button = styled.button`
border: none;
flex: 1;
background-color: teal;
`;
const ButtonIcon = styled.img`
width: 30px;
height: 30px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <InputContainer>
        <Input type="email" placeholder="Your email"/>
        <Button>
          <ButtonIcon src="https://cdn-user-icons.flaticon.com/49697/49697799/1640775159938.svg?token=exp=1640776062~hmac=dc52655ea200a9ab86c135b82935bd1f" />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
