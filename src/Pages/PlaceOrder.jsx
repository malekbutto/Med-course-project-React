import styled from "styled-components";
import { mobile } from "../responsive";
import { React, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Fab, makeStyles } from "@material-ui/core";


const Container = styled.div`
    width: 90vw;
    height: 90%;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("../images/Logo-LoginPage.JPG")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #f5fbfd;
    ${mobile({ width: "75%", height: "20vw" })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    ${mobile({ height: "30%", margin: "auto", justifyContent: "center" })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0px 0px;
    padding: 5x;
    ${mobile({ height: "30%" })}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    font-size: 18px;
    ${mobile({ margin: "10px 0px" })}
`;
const Textarea = styled.textarea`
        resize: none;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #797EAB;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 50%;
    margin: auto;
`;
const FooterDiv = styled.div`
    ${mobile({ display: "none" })}
`;

const PlaceOrder = ({ user, setUser, cart, setCart, handleOrdersList }) => {

    const [phone, setPhone] = useState();
    const [cartList, setCartList] = useState([]);
    const [hover, sethover] = useState(false);
    let totalPrice = 0;

    
    const navigate = useNavigate();

    useEffect(() => {
        setCartList(cart.map((product) => {
            return <option key={product.id}>{product.amount} - {product.title}</option>
        }
        ));
    }, [])


    const confirmOrder = (ev) => {
        ev.preventDefault();
        if (phone.length < 10) {
            toast.error("Invalid phone number format!", {
                position: "top-center",
                autoClose: 1500,
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
                autoClose: 1500,
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
                                height="100px"
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
                                    totalPrice = item.amount*item.price
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
