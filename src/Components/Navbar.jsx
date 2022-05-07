import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Outlet, Link } from 'react-router-dom';
//import Time from DateTime;
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
    text-align: center;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;    
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 120px;
    padding: 0px 10px;
`;
const Logo = styled.div`
    margin: auto;
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;
// const SearchContainer = styled.div`
//     border: 0.5px solid lightgray;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
// `;
// const Input = styled.input`
//     border: none;
//     ${mobile({ width: "50px" })}
// `;
const LeftCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: left;
    width: 120px;
    padding: 0px 100px;
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    width: 120px;
    padding: 0px 100px;
`;
const RightCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 120px;
    padding: 0px 100px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center" })}
    width: 120px;
    margin: 10px 0px;
`;
// const Nav = styled.nav`
//     font-size: 50px;
//     font-weight: 700;
//     align-items: center;
//     border: none;
//     justify-content: center;
//     display: flex;
//     width: 50px;
//     padding: 1px;
//     margin: 10px;
//     background-size: cover;
// `;
const MenuItem = styled.div`
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    var HourLabel = "";
    const CalcTime = () => {
        const today = new Date();
        if ((today.getHours() >= 0) && (today.getHours() <= 12)) {
            alert(today.getHours());
            HourLabel = "Good morning";
        }
        else if ((today.getHours() > 12) && (today.getHours() <= 17)) {
            alert(today.getHours());
            HourLabel = "Good afternoon";
        }
        else if ((today.getHours() > 17) && (today.getHours() <= 20)) {
            alert(today.getHours());
            HourLabel = "Good evening";
        }
        else if ((today.getHours() > 20) && (today.getHours() < 0)) {
            alert(today.getHours());
            HourLabel = "Good night";
        }
    };
    // const openLogin = () => {
    //     window.location.href = "./Login";
    // }
    return (
        <>
            <nav>
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/Home">
                                <Logo>
                                    <img src="../Images/Logo.JPG" alt="Logo" height="120vh" width="120vw" />
                                </Logo>
                            </Link>
                        </Left>
                        <LeftCenter>
                            <div>All Orders</div>
                        </LeftCenter>
                        <Center>
                            <Link to="/Home">
                                <MenuItem>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link to="/About">
                                <MenuItem>
                                    About
                                </MenuItem>
                            </Link>
                        </Center>
                        <RightCenter onLoad={CalcTime}>
                            <div>{HourLabel}</div>
                        </RightCenter>
                        <Right>
                            <Link to="/Login">
                                <MenuItem>
                                    Login
                                </MenuItem>
                            </Link>
                            <MenuItem>
                                <Badge badgeContent={0} color="secondary" >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Right>
                    </Wrapper>
                </Container>
            </nav>
            <Outlet />
        </>
    )
    {/* <>
                <nav>
                    <Container>
                        <Wrapper>
                            <Left>
                                <Logo>
                                    <img src="../Images/Logo.JPG" alt="Logo" height="120vh" width="120vw" />
                                </Logo>
                                <SearchContainer>
                                    <Input placeholder="Search" />
                                    <Search style={{ color: "grey", fontSize: 16 }} />
                                </SearchContainer>
                            </Left>
                            <LeftCenter>
                                <div>All Orders</div>
                            </LeftCenter>
                            <Center>
                                <Link to="/Home">
                                    <MenuItem>
                                        Home
                                    </MenuItem>
                                </Link>
                                <Link to="/About">
                                    <MenuItem>
                                        About
                                    </MenuItem>
                                </Link>
                            </Center>
                            <Right>
                                <Nav>
                                    <Link to="/Login">
                                        <MenuItem>
                                            Login
                                        </MenuItem>
                                    </Link>
                                    <MenuItem>
                                        <Badge badgeContent={3} color="secondary" >
                                            <ShoppingCartOutlined />
                                        </Badge>
                                    </MenuItem>
                                </Nav>
                            </Right>
                        </Wrapper>
                    </Container>
                </nav>
            </>
            ) */}
};

export default Navbar;