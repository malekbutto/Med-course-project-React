import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { buttonStyle } from "./LayoutMuiStyle";
import { createTheme } from "@mui/system";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

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
    justify-content: center;
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
    align-items: left;
    text-align: center;
    justify-content: left;
    width: 100px;
    padding: 0px 20px;
    margin: 10px;
`;
const Logo = styled.div`
    margin: auto;
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin: 55px;
    padding: 5px;
    background-color: #797EAB;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" }, { display: "none" })}
`;
const LeftCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-evenly;
    // justify-content: start;
    padding: 0px 10px;
    width: 300px;
`;
const GreetingsText = styled.div`
    background-color: turkez;
    color: black;
    padding: 1px;
    margin: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
`;
const PFP = styled.div`
    margin: 10px;
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 55%;
    padding: 0px 100px;
`;
const RightCenter = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 9vw;
    padding: 0px 100px;
    font-size: 24px;
    font-weight: 600;
`;
const AllOrders = styled.div`

`;
const AddProduct = styled.div`

`;
const EditProduct = styled.div`

`;
const DeleteProduct = styled.div`

`;
const SignInOut = styled.div`

`;
const Right = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    text-align: right;
    justify-content: center;
    ${mobile({ justifyContent: "center" })}
    width: 190px;
    margin: 0px 20px;
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
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const theme = createTheme({
    components: {
        Button: {
            variants: [
                {
                    props: {
                        variant: "signButton",
                    },
                    style: {
                        backgroundColor: "#797EAB",
                    },
                },
            ],
        },
    },
});

const Navbar = ({ user, setUser }) => {

    const [product, setProduct] = useState();
    const [productsList, setProductsList] = useState([]);
    axios.get("./Files/JSON_Files/users.json").then((res) => {
        setProductsList(res.data.map((item) =>
            item.title)
        )
    });

    const search = (e) => {
        let keyword = e.target.value;
        let foundList = [];
        if (keyword && keyword.toString().trim().length > 0)
          {
            foundList = productsList.filter((product) =>
            {
              return productsList.name.indexOf(keyword) > -1;//(user.name.toLowerCase().startsWith(keyWord.toLowerCase()));
            });
          }
          setProduct(keyword);
          setProductsList(foundList);
          console.log(keyword, foundList)
        };
        //
        // onSelectedItem = (item) => {
        //   this.setState({name: item.name, list:null});
        // };
    
    const notify = () => {
    toast.info("Hello", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    const CalcTime = () => {
        const today = new Date();
        if ((today.getHours() >= 0) && (today.getHours() < 12)) {
            return "Good morning";
        }
        else if ((today.getHours() >= 12) && (today.getHours() <= 17)) {
            return "Good afternoon";
        }
        else if ((today.getHours() > 17) && (today.getHours() < 20)) {
            return "Good evening";
        }
        else if ((today.getHours() >= 20) && (today.getHours() <= 23)) {
            return "Good night";
        }
    };
    //
    const navigate = useNavigate();
    const handleSignIn = () => {
        return (user === undefined ? navigate("/login") : navigate("/"));
    };
    const handleSignOut = () => {
        localStorage.removeItem("currUser");
        if (user !== undefined) {
            setUser(undefined);
            return navigate("/");
        }
    };

    return (
        <>
            <nav>
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/Home">
                                <Logo>
                                    <img src="../Images/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                                </Logo>
                            </Link>
                            {/* <GreetingsText>
                                {CalcTime()} {user !== undefined ? user?.fName : "Guest"}
                            </GreetingsText> */}
                        </Left>
                        <LeftCenter>
                            <SearchContainer>
                                <Input placeholder="Search" />
                                <Search style={{ color: "white", fontSize: 16 }} />
                            </SearchContainer>
                        </LeftCenter>
                        <Center>
                            <Link to="/Home">
                                <Button sx={buttonStyle}
                                    variant="contained"
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/About">
                                <Button sx={buttonStyle}
                                    variant="contained"
                                >
                                    About
                                </Button>
                            </Link>
                            {/* <PFP>
                                {user !== undefined ? <img src={user?.pfp} width="40px" height="40px" /> : ""}
                            </PFP> */}
                            

                        </Center>
                        <RightCenter>

                            <AddProduct>
                                <Link to="/AddProduct">
                                    {user?.fName === "Malek" ? (
                                        <Button sx={buttonStyle}
                                            variant="contained"
                                        >
                                            Add product
                                        </Button>
                                    ) : null}
                                </Link>
                            </AddProduct>
                            <EditProduct>
                                <Link to="/EditProduct">
                                    {user?.fName === "Malek" ? (
                                        <Button sx={buttonStyle}
                                            variant="contained"
                                        >
                                            Edit product
                                        </Button>
                                    ) : null}
                                </Link>
                            </EditProduct>
                            <DeleteProduct>
                                <Link to="/DeleteProduct">
                                    {user?.fName === "Malek" ? (
                                        <Button sx={buttonStyle}
                                            variant="contained"
                                        >
                                            Delete product
                                        </Button>
                                    ) : null}
                                </Link>
                            </DeleteProduct>
                            <AllOrders>
                                <Link to="/AllOrders">
                                    {user?.fName === "Malek" ? (
                                        <Button sx={buttonStyle}
                                            variant="contained"
                                            onclick={notify}
                                        >
                                            All Orders
                                        </Button>
                                    ) : null}
                                </Link>
                            </AllOrders>
                        </RightCenter>
                        <Right>
                            <SignInOut>
                                {user === undefined ?
                                    (
                                        <Button
                                            sx={buttonStyle}
                                            variant="contained"
                                            onClick={handleSignIn}
                                        // id="SignButton"
                                        >
                                            Sign In
                                        </Button>
                                    ) : (
                                        <Button
                                            sx={buttonStyle}
                                            variant="contained"
                                            onClick={handleSignOut}
                                        // id="SignButton"
                                        >
                                            Sign Out
                                        </Button>
                                    )
                                }
                            </SignInOut>
                            <MenuItem>
                                <Link to="/ShoppingCart">
                                    <Badge badgeContent={0} color="secondary" >
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </Link>
                            </MenuItem>
                        </Right>
                    </Wrapper>
                </Container>
            </nav>
            <Outlet />
        </>
    )

};

export default Navbar;