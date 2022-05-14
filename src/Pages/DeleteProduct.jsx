import styled from "styled-components";
import { mobile } from "../responsive";
import { sweets, pastries, ourCuisine } from '../data';
import axios from "axios";
import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    ${mobile({ width: "75%", height: "20vw" })}
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
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    font-size: 14px;
    fontFamily: Poppins,
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #797EAB;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;




const DeleteProduct = () => {

    const notify = () => toast("Product deleted successfully");

    const [title, setTitle] = useState();


    let Id;
    let filePath;
    let category;
    let productsArray;

    const deleteProduct = (ev) => {
        ev.preventDefault();
        CategoryChoosed(ev);
    }

    const ProductChoosed = (e) => {
        setTitle = (e.target.value);
        axios.get(filePath).then((res) => {
            const tempProduct = res.data.find(
                (obj) =>
                    obj.title.toLowerCase() === e.target[0]
            );
        }
        )
    }

    const CategoryChoosed = (e) => {
        category = e.target.value;
        showProducts(e);
    }

    const showProducts = (e) => {
        switch (category) {
            case "sweets":
                filePath = "./Files/JSON_Files/sweets.json";
                setTitle(sweets.map((product) => {
                    return product.title
                }
                ));
                // for (var i = 0; i < productsArray.length; i++) {
                //     console.log(productsArray[i]);
                //     setTitle(productsArray[i]);
                // }
                break;
            case "pastries":
                filePath = "./Files/JSON_Files/pastries.json";
                setTitle(pastries.map((product) => {
                    return product.title
                }
                ));
                // for (var i = 0; i < productsArray.length; i++) {
                //     console.log(productsArray[i]);
                //     setTitle(productsArray[i]);
                // }
                break;
            case "ourCuisine":
                filePath = "./Files/JSON_Files/ourCuisine.json";
                setTitle(ourCuisine.map((product) => {
                    return product.title
                }
                ));
                // for (var i = 0; i < productsArray.length; i++) {
                //     console.log(productsArray[i]);
                //     setTitle(productsArray[i]);
                // }
                break;
        }

    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={deleteProduct}>
                            <Title>Delete Product</Title>
                            <label for="Category"><strong>Choose a Category:</strong></label>
                            <Select
                                type="text"
                                id="category"
                                name="category"
                                required
                                fullWidth
                                autoComplete="category"
                                size="3"
                                onChange={CategoryChoosed}
                            >
                                <Option value="sweets">Sweets</Option>
                                <Option value="pastries">Pastries</Option>
                                <Option value="ourCuisine">Our Cuisine</Option>
                            </Select>
                            <br />
                            <label for="Product">Choose a Product:</label>
                            <Select
                                type="text"
                                id="product"
                                name="product"
                                required
                                fullWidth
                                size="3"
                                text-size="30px"
                                onChange={ProductChoosed}
                            >
                                <Option>{title}</Option>
                            </Select>
                            <br />
                            <Button type='submit' onclick={notify} fullWidth className='btn btn-dark btl-lg btn-block'>Delete Product</Button>
                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default DeleteProduct;
