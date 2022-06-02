import styled from "styled-components";
import {mobile} from "../responsive";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    &:hover {
        background-color: #797EAB;
        color: white;
        transform: scale(1.2);
    }
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    border-radius: 50%;
`;
const CategoryItem = ({user, setUser, cart, setCart, handleAddToCart, handleChange, item }) => {
    
    const navigate = useNavigate();
    
    return (
        <Container>
            <Image src={item.img} alt='CategoryImage' />
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=>navigate(item.url)}>Watch</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;