import SearchBar from "../Components/SearchBar";
import { buttonStyle } from "./LayoutMuiStyle";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { createTheme } from "@mui/system";
import Button from "@mui/material/Button";
import 'react-toastify/dist/ReactToastify.css';
import { Container, Wrapper, Left, LogoLeft, LogoCenter, LeftCenter,
         Center, MiddleButton, RightCenter, AddProduct, EditProduct,
         DeleteProduct, AllOrders, Right, MenuItem, SignInOut, SpanMyShop,
         CartDiv, SpanKid1, SpanKid2 } from '../Styled_Components/Navbar_Styled';

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

const Navbar = ({ user, setUser, size }) => {

    const [data, setData] = useState([]);
    const [searcheValue, setSearcheValue] = useState();
    const navigate = useNavigate();

    let searchedInput;

    // Search
    useEffect(() => {
        const getProducts = async () => {
            const sweets = await axios.get("http://localhost:3000/sweets").then((res) => res.data);
            const pastries = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
            const ourCuisine = await axios.get("http://localhost:3000/ourCuisine").then((res) => res.data);
            const allProducts = sweets.concat(pastries, ourCuisine);
            setData(allProducts);
        };
        getProducts();
    }, []
    )

    useEffect(() => {
        searchedInput = searcheValue;
    })

    const handleSignIn = () => {
        return (user === undefined ? navigate("/login") : navigate("/Home"));
    };

    const handleSignOut = () => {
        localStorage.removeItem("currUser");
        if (user !== undefined) {
            setUser(undefined);
            return navigate("/Home");
        }
    };

    return (
        <>
            <nav>
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/Home">
                                <LogoLeft>
                                    <img src="../Images/Logo/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                                </LogoLeft>
                            </Link>
                        </Left>
                        <LeftCenter>
                        <SearchBar data={data} />
                        </LeftCenter>
                        <Center>
                            <LogoCenter>
                                <img src="../Images/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                            </LogoCenter>
                            <MiddleButton>
                                <Button sx={buttonStyle}
                                    variant="contained"
                                    onClick={() => navigate("/Home")}
                                >
                                    Home
                                </Button>
                            </MiddleButton>
                            <MiddleButton>
                                <Button sx={buttonStyle}
                                    variant="contained"
                                    onClick={() => navigate("/About")}
                                >
                                    About


                                </Button>
                            </MiddleButton>
                        </Center>
                        <RightCenter>
                            <AddProduct>
                                {user?.fName === "Malek" ? (
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                        onClick={() => navigate("/AddProduct")}
                                    >
                                        Add product
                                    </Button>
                                ) : null}
                            </AddProduct>
                            <EditProduct>
                                {user?.fName === "Malek" ? (
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                        onClick={() => navigate("/EditProduct")}
                                    >
                                        Edit product
                                    </Button>
                                ) : null}
                            </EditProduct>
                            <DeleteProduct>
                                {user?.fName === "Malek" ? (
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                        onClick={() => navigate("/DeleteProduct")}
                                    >
                                        Delete product
                                    </Button>
                                ) : null}
                            </DeleteProduct>
                            <AllOrders>
                                {user?.fName === "Malek" ? (
                                    <Button sx={buttonStyle}
                                        variant="contained"
                                        onClick={() => navigate("/AllOrders")}
                                    >
                                        All Orders
                                    </Button>
                                ) : null}
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
                                        >
                                            Sign In
                                        </Button>
                                    ) : (
                                        <Button
                                            sx={buttonStyle}
                                            variant="contained"
                                            onClick={handleSignOut}
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
                                            navigate("Cart")
                                        ))}>
                                        <SpanKid1>
                                            <i className="fas fa-cart-plus" ></i>
                                        </SpanKid1>
                                        <SpanKid2>{size}</SpanKid2>
                                    </CartDiv>
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