import React, { useEffect, useState } from "react";
import { Badge, List, TableBody } from "@material-ui/core";
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
    
    ${mobile({ height: "50px", alignItems: "center" })}
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
    width: 100%;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;    
    display: flex;
    align-items: left;
    text-align: center;
    justify-content: left;
    width: 100%;
    padding: 0px 20px;
    margin: 10px;
`;
const LogoLeft = styled.div`
    margin: auto;
    font-weight: bold;
    ${mobile({ fontSize: "24px", display: "none" })}
`;
const LogoCenter = styled.div`
    margin: auto;
    font-weight: bold;
    display: none;
    ${mobile({ fontSize: "24px", display: "flex" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    padding: 0px;
    background-color: #f5fbfd;
    ${mobile({ display: "none" })}
`;
const Input = styled.input`
    border: none;
    height: 30px;
    font-size: 18px;
    padding-left: 10px;
    display: grid;
    ${mobile({ width: "50px" }, { display: "none" })}
`;
const Image = styled.img`
    border: none;
    display: grid;
`;
const LeftCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-evenly;
    // justify-content: start;
    padding: 0px 10px;
    width: 100%;
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
    width: 100%;
    padding: 0px 100px;
    ${mobile({ display: "flex" })}
`;
const MiddleButton = styled.div`
    ${mobile({ display: "none" })}
`;
const RightCenter = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 20%;
    padding: 0px 100px;
    font-size: 24px;
    font-weight: 600;
    ${mobile({ display: "none", flex: "0" })}
    
`;
// ${mobile({ flexDirection: "row", width: "20%" })}
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
    flex: 1;
    display: flex;
    align-items: center;
    text-align: right;
    justify-content: center;
    ${mobile({ justifyContent: "center" })}
    width: 100%;
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
const Table = styled.table`

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

    const [keyword, setKeyword] = useState("");
    const [matchProducts, setMatchProducts] = useState([]);
    const [data, setData] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [foundList, setFoundList] = useState([]);

    // Search
    useEffect(() => {
        const getProducts = async () => {
            const sweets = await axios.get("http://localhost:3000/sweets").then((res) => res.data);
            const pastries = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
            const ourCuisine = await axios.get("http://localhost:3000/ourCuisine").then((res) => res.data);
            const allProducts = sweets.concat(pastries, ourCuisine);

            setData(allProducts);
            console.log(allProducts);

        };
        getProducts();
    }, []);

    const onSearchChange = (e) => {
        let foundListArray;
        if (e.target.value && e.target.value.toString().trim().length > 0) {
            foundListArray = data.filter((product) => {
                return product.title.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setFoundList(foundListArray);
        }
        setMatchProducts(e.target.value);
        console.log(foundListArray);
        // setProductsList(foundList);
        // console.log(e.target.value);
    };

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
    // const handleCartIcon = () => {
    //     return navigate("/ShoppingCart");
    // }

    return (
        <>
            <nav>
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/Home">
                                <LogoLeft>
                                    <img src="../Images/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                                </LogoLeft>
                            </Link>
                            {/* <GreetingsText>
                                {CalcTime()} {user !== undefined ? user?.fName : "Guest"}
                            </GreetingsText> */}
                        </Left>
                        <LeftCenter>
                            <SearchContainer>
                                {/* value={product}  */}
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    onChange={onSearchChange}
                                />
                                <List>
                                    {foundList.map(product => {
                                        return <div><tr key={product.id}>{product.title}</tr>
                                        <Image src={product.img} alt="" width="70vw" height="70vh"/>
                                        </div>
                                    })}
                                </List>
                                {<table data={foundList} >

                                </table>}

                            </SearchContainer>
                        </LeftCenter>
                        <Center>
                            <LogoCenter>
                                <img src="../Images/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                            </LogoCenter>
                            <MiddleButton>
                                <Link to="/Home">
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                    >
                                        Home
                                    </Button>
                                </Link>
                            </MiddleButton>
                            <MiddleButton>
                                <Link to="/About">
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                    >
                                        About
                                    </Button>
                                </Link>
                            </MiddleButton>
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
                                {
                                    // user === undefined ? onClick = { handleSignIn } :

                                    <Link to="/ShoppingCart">
                                        <Badge badgeContent={0} color="secondary" >
                                            <ShoppingCartOutlined />
                                        </Badge>
                                    </Link>
                                }
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