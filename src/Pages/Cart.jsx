import { Remove } from "@material-ui/icons";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";

const Container = styled.div`
     
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const TopText = styled.h1`
    margin: 0px 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
    font-size: 24px;
    font-weight: 200;
`;
const ProductId = styled.span`

`;
const ProductSize = styled.span`

`;
const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.button`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    display: flex;
    flex-direction: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
    padding: 20px;
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
    flex: 1;
    font-size: 24px;
    font-weight: 600;
`;
const SummaryItemPrice = styled.span`
    flex: 1;
    font-size: 24px;
    font-weight: 600;
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);
    const [productImage, setProductImage] = useState();

    useEffect(() => {
        console.log(cart);
        if (cart.includes('fakepath'))
            setProductImage('./Images/Category/No_Image.jpeg');
        else
            setProductImage(cart.img);
    }, []);



    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price));
        setPrice(total);
    };

    useEffect(() => {
        handlePrice();
    });

    const purchaseClicked = () => {
        alert("Thank you");
    }

    return (
        <Container>
            <Wrapper>
                <Title>Your Basket</Title>
                <Bottom>
                    <Info className="cart-items">
                        <Product>
                            <TopText>{cart?.length === 0 && <div>Cart Is Empty</div>}</TopText>
                            {cart?.map((item) => (
                                <div key={item.id}>
                                    <Details>
                                        <ProductDetail>
                                            <Image src={item.img} alt={item.title} width="250px" length="250px"></Image>
                                        </ProductDetail>
                                        <ProductName>
                                            <b>Product: </b>{item.title}
                                        </ProductName>
                                    <PriceDetails>
                                        <ProductPrice>
                                            <b>Price: </b>{item.price}
                                        </ProductPrice>
                                        <ProductAmountContainer>
                                            {/* <button onClick={() => handleChange(item,1)}>+</button> */}
                                            <Add cursor="pointer" onClick={() => handleChange(item,1)}/>
                                            <ProductAmount>{item.amount}</ProductAmount>
                                            {/* <button onClick={() => handleChange(item,-1)}>-</button> */}
                                            <Remove cursor="pointer" onClick={()=>handleChange(item,-1)} />
                                        </ProductAmountContainer>
                                        <DeleteIcon cursor="pointer" onClick={()=>handleRemove(item.id)}/>
                                    </PriceDetails>
                                    <Hr />
                                    </Details>
                                </div>
                            ))
                            }
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{price} nis</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Place Order</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Cart;