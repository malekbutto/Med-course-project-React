import { Remove } from "@material-ui/icons";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import DeleteIcon from '@mui/icons-material/Delete';

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
    color: ${(props) => props.type  = "filled" && "white"};
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
    padding: 20px;
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

    const ready = () => {
        // var removeCartItemIcon = document.getElementsByClassName('btn-danger');
        // for (var i = 0; i < removeCartItemIcon.length; i++) {
        //     var RemoveIcon = removeCartItemIcon[i];
        //     RemoveIcon.addEventListener('click', removeCartItem)
        // }

        var quantityInputs = document.getElementsByClassName('cart-quantity-input');
        for (var j = 0; j < quantityInputs.length; j++) {
            var input = quantityInputs[j];
            input.addEventListener('change', quantityChanged);
        }

        // var addToCartButtons = document.getElementsByClassName('shop-item-button');
        // for (var i = 0; i < addToCartButtons.length; i++) {
        //   var button = addToCartButtons[i];
        //   button.addEventListener('clicked', addToCartClicked)
        // }
    
        // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    
    }

//     const addItemToCart = (title, imageSrc, price) => {
//         var cartRow = document.getElementsByClassName('div');
//         cartRow.classList.add('cart-row');
//         var cartItems = document.getElementsByClassName('cart-items')[0];
//         var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
//         for (var i = 0; i < cartItemNames.length; i++) {
//           if (cartItemNames[i].innerText == title) {
//             alert('this items alredy added to cart')
//             return
//           }

          
//     var cartRowContents = `
//     <ImgContainer className="cart-item cart-column">
//                 <Image src=${imageSrc} className="shop-item-image" />
//               </ImgContainer>
//               <InfoContainer>
//                 <Title className="shop-item-title">${title}</Title>
//                 <Desc>{item.desc}</Desc>
//                 <Price className="shop-item-price">${price}</Price>
//                 <Button className="btn btn-primary shop-item-button">Add To Cart</Button>
//               </InfoContainer>
//     `;
//     cartRow.innerText = cartRowContents;
//     cartItems.append(cartRow);
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('clicked', removeCartItem);
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
//   }
// }
    // const addToCartClicked = (event) => {
    //     var button = event.target;
    //     var shopItem = button.parentElement.parentElement;
    //     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    //     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    //     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    //     addItemToCart(title, imageSrc, price)
    //     updateCartTotal();
    //   }

    const removeCartItem = (event) => {
        var IconClicked = event.target;
        IconClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
    }

    const quantityChanged = (event) => {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateCartTotal();
    }

    const purchaseClicked = () => {
        alert("Thank you");

    }

    const updateCartTotal = () => {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0];
        var cartRows = cartItemContainer.getElementsByClassName('cart-row');
        var total = 0;
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName('cart-price')[0];
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            var price = parseFloat(priceElement.innerText.replace('nis', ''));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('cart-total-price')[0].innerText = total + ' nis';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    }
    else {
        ready();
    }

    // var count = 0;
    // function AddAmountFunc() {
    //     count = document.getElementById('ProductAmount').value;
    //     ++count;
    // }
    // function RemoveAmountFunc() {
    //     count = document.getElementById('ProductAmount').value;
    //     if (count !== 0)
    //         count--;
    // }

    return (
        <Container>
            <Wrapper>
                <Title>Your Basket</Title>
                <div className="cart-row">
                        <span className="cart-item cart-header cart-column">Item</span>
                        <span className="cart-price cart-header cart-column">Price</span>
                        <span className="cart-quantity cart-header cart-column">Quantity</span>
                    </div>
                {/* <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top> */}
                <Bottom>
                    <Info className="cart-items">
                        <Product className="cart-row">
                            <ProductDetail className="cart-item cart-column">
                                <Image classname="cart-item-image" src="./Images/Category/Sweets/Trilece_Caramel2.jpg" />
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
                                <ProductPrice className="cart-price cart-column">
                                    12 nis
                                </ProductPrice>
                                <ProductAmountContainer>
                                    <input className="cart-quantity-input" type="number" defaultValue="2" min="1" max="15" />
                                    <DeleteIcon className="btn btn-danger" cursor="pointer"/>
                                    {/* <button className="btn btn-danger" type="button">
                                        Remove
                                    </button> */}
                                </ProductAmountContainer>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product className="cart-row">
                            <ProductDetail className="cart-item cart-column">
                                <Image classname="cart-item-image" src="./Images/Category/Sweets/Trilece_Strawberry.jpg" />
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
                                <ProductPrice className="cart-price cart-column">
                                    15 nis
                                </ProductPrice>
                                <ProductAmountContainer>
                                    <input id="cart-quantity-input" className="cart-quantity-input" type="number" defaultValue="1" min="1" max="15"></input>
                                    <DeleteIcon className="btn btn-danger" cursor="pointer"/>
                                    {/* <button className="btn btn-danger" type="button">
                                        Remove
                                    </button> */}
                                    {/* <div onClick={AddAmountFunc}>
                                        <img src="./Images/Icons/Add.png" alt="AddIcon" />
                                    </div>
                                    <ProductAmount className="ProductAmount">{count}</ProductAmount>
                                    <div onClick={RemoveAmountFunc}>
                                        <img src="./Images/Icons/Remove.png" alt="RemoveIcon" />
                                    </div> */}
                                </ProductAmountContainer>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice className="btn btn-primary btn-purchase">{0} nis</SummaryItemPrice>
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