import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sweets, pastries, popularProducts, ourCuisine } from '../data';
// import sweets from './File/';
import Footer from "../Components/Footer";
// import { Alert } from "react-bootstrap";
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
    ${mobile({ width: "75%" ,height: "20vw"})}
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

const AddProduct = () => {

    const notify = () => toast("Product added successfully!");

    // const [Id, setId] = useState();
    const [img, setImg] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();

    let Id;
    let filePath;

    const newProduct = (ev) => {
        ev.preventDefault();
        let inputCategory = ev.target[2].value;
        let selectedbg;
        switch (inputCategory) {
            case "sweets":
                selectedbg = "fcf1ed";
                filePath = ".\sweets.json";
                break;
            case "pastries":
                selectedbg = "f5fbfd";
                filePath = ".\pastries.json";
                break;
            case "ourCuisine":
                selectedbg = "fbf0f4";
                filePath = ".\ourCuisine.json";
                break;
            default:
        }
        axios.get(filePath).then((res) => {
            // setId(res.data.length);
            Id = (res.data.length);
            console.log(Id);
        });
        const product = JSON.stringify ({
            id: Id,
            img: img,
            bg: selectedbg,
            title: title,
            desc: desc,
            price: price,
        });
        document.forms[0].reset();
        axios.post('https://httpbin.org/post', product, {
            headers: {
                'content-Type': filePath
            }  
        });

        // res.data.data;

        // axios.post({filePath}, {product});
        console.warn('added', { product });
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={newProduct}>
                            <Title>Add New Product</Title>
                            <Input
                                type="text"
                                id="ProductName"
                                name="ProductName"
                                placeholder="Product Name"
                                required
                                fullWidth
                                autoComplete="ProductName"
                                autoFocus
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description of the Product"
                                required
                                fullWidth
                                autoComplete="description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                            <label for="Category">Choose a Category:</label>
                            <Select
                                type="text"
                                id="category"
                                name="category"
                                required
                                fullWidth
                                autoComplete="category"
                                size="3"
                                font-size="30px"
                            >
                                <Option value="sweets">Sweets</Option>
                                <Option value="pastries">Pastries</Option>
                                <Option value="ourCuisine">Our Cuisine</Option>
                            </Select>
                            <br />
                            <label for="img">Upload Image:</label>
                            <input type="file" id="img" name="img" accept="image/*" value={img}
                                onChange={(e) => setImg(e.target.value)} />
                            <br />
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price of the Product (nis)"
                                required
                                fullWidth
                                autoComplete="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                pattern
                            />
                            <Button type='submit' onclick={notify}fullWidth className='btn btn-dark btl-lg btn-block'>Add Product</Button>

                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default AddProduct;
