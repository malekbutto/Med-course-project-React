import Footer from "../Components/Footer";
import { React, useState, useEffect } from "react";
import * as reactbootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Wrapper, Title, THEAD, TR, TH, TD,
    TBODY, 
} from '../Styled_Components/AllOrders_Styled';

const AllOrders = ({ user, setUser, cart, setCart, handleChange }) => {

    const [allOrdersData, setAllOrdersData] = useState([]);
    const [ordersList, setOrdersList] = useState([]);

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
        const getOrders = async () => {
            const data = JSON.parse(localStorage.getItem("AllOrders"));
            setOrdersList(data);
        };
        getOrders();
    }, [setOrdersList])

    const handleRemove = (id) => {
        const arr = ordersList.filter((item) => item.OrderId !== id);
        localStorage.setItem("AllOrders", JSON.stringify(arr));
        setOrdersList(arr)
    };

    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>All Orders</Title>
                    <Title>{ordersList?.length === 0 ? <div>No Orders</div> : ""}</Title>
                    <reactbootstrap.Table reactbootstrap="true" bordered hover>
                        <THEAD>
                            <TR>
                                <TH>Order Id</TH>
                                <TH>Customer Name</TH>
                                <TH>Phone</TH>
                                <TH>Email</TH>
                                <TH>Order Details</TH>
                                <TH>Product Amount</TH>
                                <TH>Total Price</TH>
                                <TH>Romove Order</TH>
                            </TR>
                        </THEAD>
                        <TBODY>
                            {ordersList?.map((item, key) => (
                                <TR key={key}>
                                    <TD>{item.OrderId}</TD>
                                    <TD>{item.Customer_Name}</TD>
                                    <TD>{item.Phone}</TD>
                                    <TD>{item.Email}</TD>
                                    <TD>{item.Cart.map(x=><li key={x.OrderId}>{x.Product_Name}</li>)}</TD>
                                    <TD>{item.Cart.map(x=><li key={x.OrderId}>{x.Amount}</li>)}</TD>
                                    <TD>{item.Total_Price}</TD>
                                    <TD>
                                        <Fab size="small" color="secondary" aria-label="Remove"
                                            cursor="pointer" onClick={() => handleRemove(item.OrderId)}>
                                            <DeleteIcon />
                                        </Fab>
                                    </TD>
                                </TR>

                            ))}
                        </TBODY>
                    </reactbootstrap.Table>
                </Wrapper>
            </Container>
            <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
        </div >
    )
}

export default AllOrders;
