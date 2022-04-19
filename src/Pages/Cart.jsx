import { Remove } from "@material-ui/icons";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Container = styled.div`
     
`;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
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

`;
const ProductId = styled.span`

`;
const ProductSize = styled.span`

`;
const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const ProductAmountContainer = styled.div`
    
`;
const ProductAmount = styled.div`
    
`;
const ProductPrice = styled.div`
    
`;


const Summary = styled.div`
    flex: 1;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>Your Basket</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="../Images/Category/Sweets/Trilece_Strawberry.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b>Trilece Strawberry
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b>1
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b>Personal
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>15 nis</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
