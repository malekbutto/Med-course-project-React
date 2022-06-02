import React, { useEffect, useState } from "react";
import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { buttonStyle } from "./LayoutMuiStyle";
import { createTheme } from "@mui/system";
import Button from "@mui/material/Button";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Autocomplete } from "@mui/material";
import { Box, TextField } from "@material-ui/core";


const Container = styled.div`
    height: 100px;    
    
    ${mobile({ height: "50px", alignItems: "center" })}
    background-color: #f5fbfd;
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
const Hr = styled.hr`
    background-color: #eee;
    width: 100%;
    margin: 1px 0px;
    border: 0.5px solid gray;
`;
const Image = styled.img`
    display: grid;
`;
const SearchList = styled.div`
    display: column;
    align-items: center;
    text-align: center;
    position: relative;
    justify-content: space-between;
    padding: 0px 0px;
    margin: 5px;
    width: 100%;
`;
const TBODY = styled.tbody`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TD = styled.td`
    border: 0.5px solid gray;
    background-color: none;
    align-items: center;
    text-align: center;
    justify-content: center;
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
const Span = styled.span`
    padding: 1px;
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
    const [foundListArray, setFoundListArray] = useState([]);
    const [categories, setCategories] = useState([]);
    const [Id, setId] = useState();
    const [searchedValue, setSearchedValue] = useState();
    const [inputValue, setInputValue] = useState();

    let input;


    // let foundListArray;

    // Search
    // const onSearchClicked = () => {
    useEffect(() => {
        const getProducts = async () => {
            const sweets = await axios.get("http://localhost:3000/sweets").then((res) => res.data);
            const pastries = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
            const ourCuisine = await axios.get("http://localhost:3000/ourCuisine").then((res) => res.data);
            const category = await axios.get("http://localhost:3000/categories").then((res) => res.data);
            const allProducts = sweets.concat(pastries, ourCuisine);

            setCategories(category);
            setData(allProducts);
        };
        getProducts();
    }, []
    )


    const setInput = input => {
        setSearchedValue(input);
    }

    // const onSearchChange = (e) => {
    //     // if (e.target.value == "")
    //     //     foundListArray = "";
    //     // else
    //     if (e.target.value && e.target.value.toString().trim().length > 0) {
    //         setFoundListArray(data.filter((product) => {
    //             return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    //         }));
    //         setFoundList(foundListArray);
    //     }
    //     setMatchProducts(e.target.value);
    //     console.log(matchProducts);
    // };

    const onSelectedFromSearchBar = () => {
        let categoryName;
        let tempUser;
        console.log(searchedValue);
        axios.get(data).then((res) => {
            tempUser = res.data.find(
                (obj) =>
                    obj.title === searchedValue
            );
            setId(tempUser.id);

        })

        if (searchedValue.includes("Sweets")) {
            categoryName = "/category/sweets";
            console.log(categoryName);
            console.log(Id);
        }
        else if (searchedValue.includes("Pastries"))
            categoryName = "/category/pastries";
        else if (searchedValue.includes("OurCuisine"))
            categoryName = "/category/ourCuisine";

        navigate("./" + categoryName, { state: { id: Id } });
    }

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
                                <LogoLeft>
                                    <img src="../Images/Logo.JPG" alt="Logo" height="100vh" width="100vw" />
                                </LogoLeft>
                            </Link>
                        </Left>
                        <LeftCenter>
                            {/* <SearchContainer>
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    onChange={onSearchChange}
                                    onClick={onSearchClicked}
                                /> */}
                            <Autocomplete
                                id="product-select"
                                sx={{ width: 200 }}
                                options={data}
                                autoHighlight
                                getOptionLabel={(option) => `${option.title}`}
                                value={searchedValue}
                                onChange={(e, newValue) => console.log(newValue.title)}
                                inputValue={inputValue}
                                onInputChange={(e, newInputValue) => setSearchedValue(newInputValue)}
                                autoSelect={true}
                                noOptionsText={"No Products founds"}
                                renderOption={(props, option) => (
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
                                        <Span><img
                                            loading="lazy"
                                            width="70"
                                            src={option.img.includes('fakepath') ? './Images/Category/No_Image.jpeg' : option.img}
                                            alt=""
                                            onClick={onSelectedFromSearchBar}
                                        />
                                        </Span>
                                        <Span>{option.title}</Span>
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search a product"
                                        variant="outlined"

                                    // getoptionlabel={(option)=> `${option.id}`}
                                    // inputProps={{
                                    //     ...params.inputProps,
                                    //     autoComplete: 'new-password', // disable autocomplete and autofill
                                    // }}
                                    // onChange={onSearchChange}
                                    // onClick={onSearchClicked}
                                    // onChange={(event: any, newValue: string  null) => setSearchedValue(newValue)}
                                    />
                                )}

                            />



                            {/* {foundList && foundList.map((product, i) =>
                                    <SearchList>
                                        <button key={i} onClick={(e) => onSelectedFromSearchBar(e)}>
                                            <img src={product.img} alt="" width={"40px"} height={"40px"} />
                                        </button>
                                        <Hr />
                                    </SearchList>
                                )} */}
                            {/* <div>
                                    <Input
                                        type="text"
                                        placeholder="Search"
                                        onChange={onSearchChange}
                                        onClick={onSearchClicked}
                                    />
                                </div>
                                <TableList>
                                    {foundList && foundList.map(product => {
                                        return <TBODY>
                                            <TD key={product.id}>
                                                <button cursor="pointer" key={product.id} onClick={(e) => onSelectedFromSearchBar(e)}>
                                                    {product.title}
                                                </button>
                                                <button cursor="pointer">
                                                    <Image src={product.img} alt="" width="50vw" height="50vh" onClick={(e) => onSelectedFromSearchBar(e)} />
                                                </button>
                                            </TD>
                                        </TBODY>
                                    })}
                                </TableList> */}
                            {/* </SearchContainer> */}
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
                                <Link to="/AddProduct" user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange}>
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
                                <Link to="/EditProduct" user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange}>
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
                                <Link to="/DeleteProduct" user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange}>
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