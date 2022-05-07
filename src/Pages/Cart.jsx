import { Remove } from "@material-ui/icons";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";

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
    ${mobile({ display: "none" })}
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
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
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
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
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
`;
const SummaryItemPrice = styled.span`
    flex: 1;
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
    var count = 0;
    function AddAmountFunc() {
        count = document.getElementById('ProductAmount').value;
        ++count;
    }
    function RemoveAmountFunc() {
        count = document.getElementById('ProductAmount').value;
        if (count!==0)
            count--;
    }

    return (
        <Container>
            <Wrapper>
                <Title>Your Basket</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="./Images/Category/Sweets/Trilece_Caramel2.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> Trilece Caramel
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 1
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> Personal
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add onClick={AddAmountFunc}>
                                        <img src="./Images/Icons/Add.png" alt="AddIcon" />
                                    </Add>
                                    <ProductAmount className="ProductAmount">{count}</ProductAmount>
                                    <Remove onClick={RemoveAmountFunc}>
                                        <img src="./Images/Icons/Remove.png" alt="RemoveIcon" />
                                    </Remove>
                                    {/* <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove /> */}
                                </ProductAmountContainer>
                                <ProductPrice>12 nis</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="./Images/Category/Sweets/Trilece_Strawberry.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> Trilece Strawberry
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 2
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> Personal
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <div onClick={AddAmountFunc}>
                                        <img src="./Images/Icons/Add.png" alt="AddIcon" />
                                    </div>
                                    <ProductAmount className="ProductAmount">{count}</ProductAmount>
                                    <div onClick={RemoveAmountFunc}>
                                        <img src="./Images/Icons/Remove.png" alt="RemoveIcon" />
                                    </div>
                                </ProductAmountContainer>
                                <ProductPrice>15 nis</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>{ProductPrice*count}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>30 nis</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-30 nis</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>30 nis</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Cart;