import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
// import { Alert } from "react-bootstrap";

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
    background-color: #f5fbfd;
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
    background-color: #797EAB;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Login = ({user, setUser }) => {
    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("./Files/JSON_Files/users.json").then((res) => {
            const inputUserName = e.target[0].value.toLowerCase();
            const inputPassword = e.target[1].value;
            const tempUser = res.data.find(
              (obj) =>
                obj.username === inputUserName &&
                obj.password === inputPassword
            );
            setUser(tempUser);
            if (tempUser !== undefined && tempUser !== null) {
              delete tempUser.password;
              localStorage.setItem("currUser", JSON.stringify(tempUser));
              navigate("/Home", user={user});
            }
          });
        };

    return (
        <Container>
            <Wrapper>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Title>Sign In</Title>
                        <Input
                            type="text"
                            id="Username"
                            name="username"
                            placeholder="Username"
                            required
                            fullWidth
                            autoComplete="username"
                            autoFocus
                        />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            fullWidth
                            autoComplete="current-password"
                        />
                        <Button type='submit' fullWidth>Login</Button>
                        {/* {flag && (
                                <Alert color="primary" variant="danger">
                                    Please Fill All fields
                                </Alert>
                            )} */}
                    </Form>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Login;
