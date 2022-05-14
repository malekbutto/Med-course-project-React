import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sweets } from '../data';
import { mobile } from "../responsive";
// import { sweets } from '../data'
import styled from "styled-components";
// import Sweets from './Sweets';
import Footer from './Footer';

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;
// const Title = styled.h1`
//     display: flex;
//     font weight: 700;
//     margin: auto;
//     align-items: center;
//     justify-content: center;
// `;

const TopTitle = styled.h1`
    display: flex;
    font weight: 700;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Container = styled.div`
    padding: 5px 0.5px;
    margin: 0px 5px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => (props.slideIndex * -100)}vw);
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
  `;
const Slide = styled.div`
    width: 100vw;
    height: 85%;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
    height: 85%;
    flex: 1;
    padding: 80px;
`;
const Image = styled.img`
    height: 85%;
    width: 100%;
    margin: 40px 5px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Price = styled.h1`
    font-size: 70px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const SweetsCategory = () => {

  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();

  var [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? (slideIndex - 1) : (sweets.length - 1));
    } else {
      setSlideIndex(slideIndex < (sweets.length - 1) ? (slideIndex + 1) : 0);
    }
  };

  const ready = () => {
    var removeCartItemIcon = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemIcon.length; i++) {
      var RemoveIcon = removeCartItemIcon[i];
      RemoveIcon.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var j = 0; j < quantityInputs.length; j++) {
      var input = quantityInputs[j];
      input.addEventListener('change', quantityChanged);
    }
  }


  const addToCartClicked = (event) => {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    addItemToCart(title, imageSrc, price)
    updateCartTotal();
  }

  const addItemToCart = (title, imageSrc, price) => {
    var cartRow = document.getElementsByClassName('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert('this items alredy added to cart')
        return
      }

    }
    var cartRowContents = `
    <ImgContainer className="cart-item cart-column">
                <Image src=${imageSrc} className="shop-item-image" />
              </ImgContainer>
              <InfoContainer>
                <Title className="shop-item-title">${title}</Title>
                <Desc>{item.desc}</Desc>
                <Price className="shop-item-price">${price}</Price>
                <Button className="btn btn-primary shop-item-button">Add To Cart</Button>
              </InfoContainer>
    `;
    cartRow.innerText = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('clicked', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
  }

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

  return (
    <div>
      <TopTitle>The Sweets</TopTitle>
      <Container className="cart-item">
        <Arrow direction="left" onMouseDown={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex} className="cart-row">
          {sweets.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer className="cart-item cart-column">
                <Image src={item.img} className="shop-item-image" />
              </ImgContainer>
              <InfoContainer>
                <Title className="shop-item-title">{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Price className="shop-item-price">{item.price} nis</Price>
                <Button className="btn btn-primary shop-item-button">Add To Cart</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onMouseDown={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>


      {/* <Container>
      {sweets.map(item=>(
          <Sweets item={item} key={item.id}/> 
      ))}
    </Container> */}
      <Footer />
    </div>
  )
}
export default SweetsCategory;