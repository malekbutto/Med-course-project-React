import styled from "styled-components";
import { mobile } from "../responsive";
import { React, useState } from "react";
import Footer from "../Components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


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

    const navigate = useNavigate();

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
            navigate("../Home");
            console.log(cart)
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
                            <label name="ProductName">Customer Name:</label>
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
                            <Textarea
                                type="text"
                                id="Cart"
                                name="Cart"
                                required
                                fullWidth
                                rows={4}
                                cols={5}
                                size="3"
                                font-size="30px"
                                disabled={true}
                                defaultValue={cart.map((item) => {
                                    return (
                                        " " + item.title + " (" + item.amount.toString() + ")"
                                    )
                                })}

                            >
                            </Textarea>
                            <br />
                            <Button type='submit' fullWidth onClick={() => handleOrdersList(cart)}>Place Order</Button>

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
