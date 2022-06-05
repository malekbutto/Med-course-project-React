import Footer from './Footer';
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {TopTitle, Container, Arrow, Wrapper, Slide, ImgContainer, Image,
    InfoContainer, Title, Desc, Price, Button } from '../Styled_Components/CategoryDetails_Styled';

const CategoryDetails = ({ user, setUser, cart, setCart, handleAddToCart, handleChange }) => {

    const [data, setData] = useState([]);
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
    }, [])

    useEffect(() => {

        const getProducts = async () => {

            const categoryData = await axios.get(`http://localhost:3000/${params.CategoryDetails}`).then((res) => res.data);
            setData(categoryData);
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
            <TopTitle>{}</TopTitle>
            <Container>
                <Arrow direction="left" onMouseDown={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {data.map((item) => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img.includes('fakepath') ? './Images/Category/No_Image.jpeg' : item.img} alt='SlideImage' />
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


            {/* <Title>Our Cuisine</Title>
      <Container>
        {ourCuisine.map(item => (
          <OurCuisine item={item} key={item.id} />
        ))}
      </Container> */}
            <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
        </div>
    )
}
export default CategoryDetails;
