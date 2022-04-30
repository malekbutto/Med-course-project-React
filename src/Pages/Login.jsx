import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 90vw;
    height: 90vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("../images/Logo-LoginPage.JPG")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: skyblue;
    ${mobile({ width: "75%" })}
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
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Login = () => {
    const myFunction = () => {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (userName==="Admin" && password==="12345")
            alert("Success");
        else
            alert("Failed");
    }

  return (
    <Container>
      <Wrapper>
          <Title>Sign In</Title>
          <Form>
              <Input type="text" id="username" placeholder="Username" />
              <Input type="password" id="password" placeholder="Password" />
              <Button onClick={myFunction}>LogIn</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
