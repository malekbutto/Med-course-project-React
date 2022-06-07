import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Container, Wrapper, Title, Form, Input, Button } from '../Styled_Components/Login_Styled';

const Login = ({ user, setUser }) => {
    const navigate = useNavigate();
    let tempUser;
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = axios.get("./Files/JSON_Files/users.json").then((res) => {
            const inputUserName = e.target[0].value.toLowerCase();
            const inputPassword = e.target[1].value;
            tempUser = res.data.find(
                (obj) =>
                    obj.username === inputUserName &&
                    obj.password === inputPassword
            );
            if (tempUser !== undefined && tempUser!==null)
                toast.success("Welcome " + tempUser.fName, {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            else
                toast.error("Invalid User Name / Password!", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            setUser(tempUser);
            if (tempUser !== undefined && tempUser !== null) {
                delete tempUser.password;
                localStorage.setItem("currUser", JSON.stringify(tempUser));
                localStorage.setItem("currUserID", JSON.stringify(tempUser.userID));
                navigate("/Home", user = { user });
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
