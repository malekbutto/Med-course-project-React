import styled from "styled-components";
import { mobile } from "../responsive";
// import axios from 'axios';
import React, { useState } from 'react';
// import { Alert } from "react-bootstrap";
import Home from "./Home";

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
    const [userNameLog, setUserNameLog] = useState("");
    const [PasswordLog, setPasswordLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        // let users = axios.get('users.json');
        // const admin = users.users[0];
        // const user = users.users[1];

        // const password = admin.password;
        // let inputPass = localStorage.getItem("password").replace(/"/g, "");

    }

    // const myFunction = () => {
    //     var userName = document.getElementById("username").value;
    //     var password = document.getElementById("password").value;
    //     if (userName==="Admin" && password==="12345")
    //         alert("Success");
    //     else
    //         alert("Failed");
    // }

    return (

        <Container>
            <Wrapper>
                <div>
                    {home ? (
                        <Form onSubmit={handleLogin}>
                            <Title>Sign In</Title>
                            <Input
                                type="text"
                                id="username"
                                placeholder="Username"
                                onChange={(event) => setUserNameLog(event.target.value)} />
                            <Input
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={(event) => setPasswordLog(event.target.value)} />
                            <Button type='submit' className='btn btn-dark btl-lg btn-block'>Login</Button>
                            {/* {flag && (
                                <Alert color="primary" variant="danger">
                                    Please Fill All fields
                                </Alert>
                            )} */}
                        </Form>
                    ) : (
                        <Home />)}
                </div>
            </Wrapper>
        </Container>
    )
}

export default Login;
