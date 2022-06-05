import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form, Input, Button } from '../Styled_Components/Login_Styled';

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
                    </Form>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Login;
