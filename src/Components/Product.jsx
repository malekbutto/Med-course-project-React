import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { React, useEffect, useState } from "react";


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Details = styled.div`
    opacity: 0;
    width: 150%;
    height: 100%;
    position: relative;
    top: 40;
    left: 40;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 2;
    display: inline;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    color: black;
    font-size: 30px;
    font-weight: 600;
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${(props) => props.bg};  
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    },
    &:hover ${Title} {
        opacity: 1;
    },
    &:hover ${Details} {
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    border-radius: 50px;
    height: 28vh;
    width: 100%;
    z-index: 2;
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;



const Product = ({item, handleAddToCart}) => {

    const [productImage, setProductImage] = useState();
    // console.log(productImg);

    useEffect(() => {
        if (item.img.includes('fakepath'))
            setProductImage('./Images/Category/No_Image.jpeg');
        else
            setProductImage(item.img);
    }, [productImage]);

    return (
        <Container bg={item.bg}>
            {/* <Title>
                {item.title}
            </Title> */}
            <Circle>
                <Image src={productImage} alt='ProductImage' />
                <Info>
                    <Icon >
                        <ShoppingCartOutlined onClick={() => handleAddToCart(item)}/>
                    </Icon>
                </Info>
                <Details>
                    <Price>
                        {item.price} nis
                    </Price>
                </Details>
            </Circle>
        </Container >

    )
}

export default Product;