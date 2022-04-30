import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";
// import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import About from '../Components/About';
// import Login from '../Pages/Login';
// import Home from "../Pages/Home";
// import { NavLink} from "react-router-dom";

// import App from "../App";

const Container = styled.div`
    height: 100px;    
    ${mobile({ height: "50px" })}

    // flex: 1;
    // text-align: center;
    background-color: #f5fbfd;
    // font-family: sans-serif;
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 0.6;
    display: flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
const LeftCenter = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    //color: #f5fbfd;
    width: 100px;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    margin: 320px;
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;
const RightCenter = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 0px 50px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    justify-content: center;
    ${mobile({ justifyContent: "center" })}
    // text-align: center;
    // height: 60px;
`;
const Nav = styled.nav`
    font-size: 50px;
    font-weight: 700;
    align-items: center;
    border: none;
    justify-content: center;
    display: flex;
    width: 50px;
    padding: 1px;
    margin: 10px;
    background-size: cover;
`;
const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    // const openLogin = () => {
    //     window.location.href = "./Login";
    // }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <LeftCenter>
                    <div>All Orders</div>
                </LeftCenter>
                <Center>
                    <Logo>
                        <img src="../Images/Logo.JPG" alt="Logo" height="120vh" width="120vw" />
                    </Logo>
                </Center>
                <RightCenter>
                    Navigations
                </RightCenter>
                <Right>
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='Login' element={<Login />} />
                            <Route path='About' element={<About />} />
                        </Routes>
                    </BrowserRouter> */}
                    <Nav>
                        {/* <NavLink to="/"></NavLink>
                            <NavLink to="Home">
                                <MenuItem>
                                    Home
                                </MenuItem>
                            </NavLink>
                            <NavLink to="Login">
                                <MenuItem>
                                    Login
                                </MenuItem>
                            </NavLink>
                            <NavLink to="About">
                                <MenuItem>
                                    About
                                </MenuItem>
                            </NavLink> */}
                            <a href="/Home">
                                <MenuItem>
                                    Home
                                </MenuItem>
                            </a>
                            <a href="/Login">
                                <MenuItem>
                                    Login
                                </MenuItem>
                            </a>
                            <a href="/About">
                                <MenuItem>
                                    About
                                </MenuItem>
                            </a>
                        <MenuItem>
                            <Badge badgeContent={3} color="secondary" >
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Nav>
                </Right>
            </Wrapper>
        </Container>
    )
};

export default Navbar;