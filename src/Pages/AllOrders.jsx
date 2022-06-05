import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Wrapper, Title, TableTitle, HeaderTitle,
    OrdersDetails, Order } from '../Styled_Components/AllOrders_Styled';

const AllOrders = ({ user, setUser, cart, setCart, handleChange, ordersList, setOrdersList }) => {

    const [allOrdersData, setAllOrdersData] = useState([]);

    const useStyles = makeStyles(theme => ({
        iconHover: {
            '&:hover': {
                border: '1px solid green',
            }
        },

        floatBtn: {
            marginRight: theme.spacing(1),
        },
    }));


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
                        <Title>{allOrdersData?.length === 0 && <div>No Orders</div>}</Title>
                        {allOrdersData.map(item => (
                            <div key={item.OrderId}>
                                <HeaderTitle>
                                    <TableTitle>Order Id</TableTitle>|
                                    <TableTitle>Customer Name</TableTitle>|
                                    <TableTitle>Phone</TableTitle>|
                                    <TableTitle>Email</TableTitle>|
                                    <TableTitle>Order Details</TableTitle>|
                                    <TableTitle>Total Price</TableTitle>|
                                </HeaderTitle>
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
