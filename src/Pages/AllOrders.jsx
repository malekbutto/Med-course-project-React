import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";

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
    align-items: center;
    justify-content: center;
`;
// https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #f5fbfd;
    ${mobile({ width: "75%" ,height: "20vw"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    ${mobile({ height: "20vw" })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const AllOrders = () => {

    const showOrders = (ev) => {
        ev.preventDefault();
    
    }
    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={showOrders}>
                        <Title>All Orders</Title>

                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default AllOrders;
