import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg?size=626&ext=jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({backgroundPosition:"bottom"})}
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({width:"60%"})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  width: 95%;
  min-width: 70%;
  margin: 10px 10px 0 0;
  padding: 7px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 50%;
  border: none;
  font-size: 16px;
  padding: 5px;
  height: 30px;
  background-color: teal;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 20px auto 0;
  box-sizing: border-box;
  &:hover {
    border: 2px solid teal;
    background-color: white;
    color: teal;
  }
`;
const Link = styled.a`
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />
          <Button>SIGN IN</Button>
          <Link>Forgot the password?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
