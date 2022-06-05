import Footer from "../Components/Footer";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fab } from "@material-ui/core";
import { Container, Wrapper, Title, Form, Input,
    Select, Button, FooterDiv } from '../Styled_Components/AddProduct_Styled';

const PlaceOrder = ({ user, setUser, cart, setCart, handleOrdersList }) => {

    const [phone, setPhone] = useState();
    const [cartList, setCartList] = useState([]);
    let totalPrice = 0;

    const navigate = useNavigate();

    useEffect(() => {
        setCartList(cart.map((product) => {
            return <option key={product.id}>{product.amount} - {product.title}</option>
        }
        ));
    }, [cart])

    const confirmOrder = (ev) => {
        ev.preventDefault();
        if (phone.length < 10) {
            toast.error("Invalid phone number format!", {
                position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.success("Your order registered successfully!", {
                position: "top-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const CName = ev.target[0].value;
            const Address = ev.target[1].value;
            const email = ev.target[3].value;

            navigate("../Home");
            handleOrdersList(CName, Address, phone, email, cart, totalPrice)
            setCart(undefined);
        }
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={confirmOrder}>
                            <Title>Place Your Order</Title>
                            <label name="ProductName">Customer Full Name:</label>
                            <Input
                                type="text"
                                id="CustomerName"
                                name="CustomerName"
                                placeholder="Customer Name   (max 25 - only Chars)"
                                required
                                minLength="1"
                                maxLength="25"
                                max-height="25px"
                                autoFocus
                                fullWidth
                                autoComplete="CustomerName"
                            />
                            <br />
                            <label name="Address">Address:</label>
                            <Input
                                type="text"
                                id="Address"
                                name="Address"
                                placeholder="Address  (max 50 Chars)"
                                required
                                minLength="1"
                                maxLength="50"
                                autoComplete="Address"
                            />
                            <br />
                            <label name="Phone">Mobile Phone:</label>
                            <Input
                                type="text"
                                id="Phone"
                                name="Phone"
                                placeholder="Phone     (10 digits)"
                                required
                                keyboardType="numeric"
                                minLength="1"
                                maxLength="10"
                                autoComplete="Phone"
                                onChange={(ev) => setPhone(ev.target.value.replace(/\D/g, ''))}
                            />
                            <br />
                            <label name="email">E-mail:</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                required
                                autoComplete="email"
                            />
                            <br />
                            <label name="Cart">Your Cart:</label>
                            <Select
                                type="text"
                                id="Cart"
                                name="Cart"
                                required
                                fullWidth
                                rows={1}
                                cols={5}
                                size="4"
                                font-size="30px"
                                disabled={true}
                            >
                                {cartList}
                            </Select>
                            <br />
                            <label name="TotalPrice">Total Price:</label>
                            <Fab >
                                {cart.map((item)=>{
                                    return totalPrice = item.amount*item.price
                                })}
                                {totalPrice}
                            </Fab>
                            <br />
                            <Button type='submit' >Place Order</Button>
                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <FooterDiv>
                <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} />
            </FooterDiv>
        </div >
    )
}

export default PlaceOrder;