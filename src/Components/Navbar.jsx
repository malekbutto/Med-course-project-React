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
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

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
    margin: 20px;
    padding: 0px;
    position: absolute;
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
    display: grid;
`;
const TableList = styled.table`
    flex: 1;
    display: inline-flex;
    align-items: center;
    text-align: left;
    justify-content: space-between;
    padding: 0px 0px;
    margin: 5px;
    width: 100%;
`;
const TH = styled.th`
    border: 0.5px solid black;
    display: grid;
    align-items: center;
    text-align: center;
    position: relative;
    font-size: 14px;
    padding: 0px;
    width: 60%;
`;
const LeftCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-evenly;
    // justify-content: start;
    padding: 0px 50px;
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
    flex: 2;
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
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    padding: 5px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const SpanMyShop = styled.span`
    font-size: 1.5rem;
    font-weight: bold;

`;
const CartDiv = styled.div`
    cursor: pointer;
`;
const SpanKid1 = styled.span`
    font-size: 2rem;
`;
const SpanKid2 = styled.span`
    padding: 0 3px;
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    top: -15px;
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

const Navbar = ({ user, setUser, size, cart, setCart, handleChange }) => {

    const [matchProducts, setMatchProducts] = useState([]);
    const [data, setData] = useState([]);
    const [foundList, setFoundList] = useState([]);
    const [categories, setCategories] = useState([]);

    let foundListArray;

    // Search
    useEffect(() => {
        const getProducts = async () => {
            const sweets = await axios.get("http://localhost:3000/sweets").then((res) => res.data);
            const pastries = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
            const ourCuisine = await axios.get("http://localhost:3000/ourCuisine").then((res) => res.data);
            const category = await axios.get("http://localhost:3000/categories").then((res) => res.data);
            const allProducts = sweets.concat(pastries, ourCuisine);

            setCategories(category);
            setData(allProducts);
            console.log(allProducts);

        };
        getProducts();
    }, []);

    const onSearchChange = (e) => {
        // if (e.target.value == "")
        //     foundListArray = "";
        // else
        if (e.target.value && e.target.value.toString().trim().length > 0) {
            foundListArray = data.filter((product) => {
                return product.title.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setFoundList(foundListArray);
        }
        setMatchProducts(e.target.value);
        console.log(foundListArray);
    };

    const onSelectedItem = async (e) => {
        let categoryName;
        let Id;
        const clickedProduct = e.target;
        console.log(foundListArray);
        axios.get(foundListArray).then((res) => {
            Id = res.data.find(
              (obj) =>
                obj.img === clickedProduct
            );
            console.log(Id);
        })

        console.log(Id);
        if (clickedProduct.src.includes("Sweets"))
            categoryName = "SweetsCategory";
        else if (clickedProduct.src.includes("Pastries"))
            categoryName = "PastriesCategory";
        else if (clickedProduct.src.includes("OurCuisine"))
            categoryName = "OurCuisineCategory";

        navigate("../" + categoryName, { replace: true});
    }


    // const CalcTime = () => {
    //     const today = new Date();
    //     if ((today.getHours() >= 0) && (today.getHours() < 12)) {
    //         return "Good morning";
    //     }
    //     else if ((today.getHours() >= 12) && (today.getHours() <= 17)) {
    //         return "Good afternoon";
    //     }
    //     else if ((today.getHours() > 17) && (today.getHours() < 20)) {
    //         return "Good evening";
    //     }
    //     else if ((today.getHours() >= 20) && (today.getHours() <= 23)) {
    //         return "Good night";
    //     }
    // };
    //
    const navigate = useNavigate();

    const handleSignIn = () => {
        return (user === undefined ? navigate("/login") : navigate("/"));
    };

    const handleClick = () => {
        return (user === undefined ?
            (
                <Login />
            ) : (
                <CartDiv />
            ));
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
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Search"
                                        onChange={onSearchChange}
                                    />
                                </div>
                                <TableList>
                                    {foundList.map(product => {
                                        return <tbody>
                                            <td>
                                                <button key={product.id} onClick={(e) => onSelectedItem(e)}>
                                                    {product.title}
                                                </button>
                                                <button>
                                                    <Image src={product.img} alt="" width="50vw" height="50vh" onClick={(e) => onSelectedItem(e)} />
                                                </button>
                                            </td>
                                        </tbody>
                                    })}
                                </TableList>
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
                            <nav>
                                <MenuItem className="nav_box">
                                    <SpanMyShop className="my_shop"></SpanMyShop>
                                    <CartDiv className="cart" onClick={() => (user === undefined ?
                                        (
                                            navigate("Login")
                                        ) : (
                                            navigate("Cart", cart = { cart }, setCart = { setCart }, handleChange = { handleChange })
                                        ))}>
                                        <SpanKid1>
                                            <i className="fas fa-cart-plus" ></i>
                                        </SpanKid1>
                                        <SpanKid2>{size}</SpanKid2>
                                    </CartDiv>
                                    {/* <Link to="/ShoppingCart">
                                        <Badge badgeContent={0} color="secondary" >
                                            <ShoppingCartOutlined />
                                        </Badge>
                                    </Link> */}
                                </MenuItem>
                            </nav>
                        </Right>
                    </Wrapper>
                </Container>
            </nav>
            <Outlet />
        </>
    )

};

export default Navbar;