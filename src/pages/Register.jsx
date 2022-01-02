import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(to right,
      rgba(0,0,0,0.4),
      rgba(255, 255, 255, 0.3)
    ),url("https://media.istockphoto.com/photos/young-woman-walking-on-street-picture-id1134003334?k=20&m=1134003334&s=612x612&w=0&h=_BETFn_2s45rU5SV7p1h0I0XIC_wMO72hRq5hIfO73w=");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({backgroundPosition:"center"})}
`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({width: "60%",height:"65%",justifyContent:"space-around"})}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
${mobile({textAlign:"center",marginTop:"-20px"})}
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
${mobile({marginTop:"-30px"})}
`;
const Input = styled.input`
flex: 1;
min-width: 45%;
margin: 10px 10px 0 0;
padding: 7px;
&:focus{
    outline: none;
}
${mobile({margin:"6px 6px 0 0"})}
`;
const Agreement = styled.div`
font-size: 12px;
margin-top: 20px;
${mobile({textAlign:"center"})}
`;
const Button = styled.button`
width: 40%;
border: none;
font-size: 16px;
padding: 10px;
height: 40px;
background-color: teal;
color: white;
font-weight: bold;
cursor: pointer;
margin: 20px auto 0;
box-sizing: border-box;
 &:hover{
     border: 2px solid teal;
     background-color: white;
     color: teal;
 }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Second name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
