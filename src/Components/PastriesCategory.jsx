import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import { pastries } from '../data';
import { mobile } from "../responsive";
import Footer from './Footer';
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//Styled
import styled from "styled-components";
import { CircleNotifications, LineAxisOutlined } from '@mui/icons-material';

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
    flex-wrap: wrap;
  justify-content: space-between; 
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


const PastriesCategory = ({handleAddToCart}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const pastriesData = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
      setData(pastriesData);
    }
    getProducts();
  }, []);

  var [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? (slideIndex - 1) : (data.length - 1));
    } else {
      setSlideIndex(slideIndex < (data.length - 1) ? (slideIndex + 1) : 0);
    }
  };


  return (
    <div>
      <TopTitle>The Pastries</TopTitle>
      <Container>
        <Arrow direction="left" onMouseDown={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {data.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} alt='SlideImage' />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Price>{item.price} nis</Price>
                <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onMouseDown={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>

      {/* <Title>The Pastries</Title>
      <Container>
        {pastries.map(item => (
          <Pastries item={item} key={item.id} />
        ))}
      </Container> */}
      <Footer />
    </div>
  )
}
export default PastriesCategory;
