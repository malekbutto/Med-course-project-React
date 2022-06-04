import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


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
    margin: auto;
    align-items: center;
    justify-content: center;
`;
// https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #f5fbfd;
    ${mobile({ width: "75%", height: "20vw" })}
`;
const Title = styled.h1`
    margin: auto;
    padding: 10px 0px;
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`;
const TableTitle = styled.div`
    font-size: 20px;
    font-weight: 300;
    padding: 5px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;
const HeaderTitle = styled.div`
    font-size: 20px;
    font-weight: 300;
    padding: 20px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;
const OrdersDetails = styled.div`
    display: flex;
    flex - direction: row;
    justify - content: space - between;
`;
const Order = styled.div`
    padding: 10px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const AllOrders = ({ user, setUser, cart, setCart, handleChange, ordersList, setOrdersList }) => {

    const [hover, sethover] = useState(false);
    const [allOrdersData, setAllOrdersData] = useState([]);

    const useStyles = makeStyles(theme => ({
        iconHover: {
            '&:hover': {
                border: '1px solid green',
                //TODO display the text CREATE ITEM instead of AddIcon
            }
        },

        floatBtn: {
            marginRight: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    useEffect(() => {
        setAllOrdersData(JSON.parse(localStorage.getItem("AllOrders")));
    }, [])

    const handleRemove = (id) => {
        const arr = allOrdersData.filter((item) => item.OrderId !== id);
        console.log(arr);
        localStorage.removeItem("AllOrders");
        localStorage.setItem("AllOrders", JSON.stringify(arr));
        setAllOrdersData(arr)
    };

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Title>All Orders</Title>
                        <Title>{allOrdersData?.length === 0 ? <div>No Orders</div>: (
                            <HeaderTitle>
                            <TableTitle>Order Id</TableTitle>|
                            <TableTitle>Customer Name</TableTitle>|
                            <TableTitle>Phone</TableTitle>|
                            <TableTitle>Email</TableTitle>|
                            <TableTitle>Order Details</TableTitle>|
                            <TableTitle>Total Price</TableTitle>|
                        </HeaderTitle>
                        )}</Title>
                        {allOrdersData.map(item => (
                            <div key={item.OrderId}>
                                
                                <OrdersDetails >
                                    <Order>{item.OrderId}</Order>
                                    <Order>{item.Customer_Name}</Order>
                                    <Order>{item.Phone}</Order>
                                    <Order>{item.Email}</Order>
                                    <Order>{item.Cart[0].title}</Order>
                                    <Order>{item.Cart[0].amount}</Order>
                                    <Order>{item.Total_Price}</Order>
                                    <Order>{item.Amount}</Order>
                                    <Fab size="small" color="secondary" aria-label="Remove"
                                        cursor="pointer" onClick={() => handleRemove(item.OrderId)}>
                                        <DeleteIcon />
                                    </Fab>
                                </OrdersDetails>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
        </div>
    )
}

export default AllOrders;
