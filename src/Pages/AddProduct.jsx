import Footer from "../Components/Footer";
import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Wrapper, Title, Form, Input, Textarea,
    Select, Option, Button, FooterDiv } from '../Styled_Components/AddProduct_Styled';

const AddProduct = ({ user, setUser, cart, setCart, handleChange }) => {
    const [img, setImg] = useState();
    const [productName, setProductName] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productPrice, setProductPrice] = useState();

    let inputCategory;
    let filePath;
    let validInput;

    const navigate = useNavigate();

    const validation = (e) => {
        if (productPrice > 250) {
            toast.error("Max price is 250!", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            validInput = false;
            e.target[4] = "autoFocus";
        }
        else
            validInput = true;
    }

    const newProduct = (ev) => {
        ev.preventDefault();
        inputCategory = ev.target[2].value;
        let selectedbg;
        switch (inputCategory) {
            case "sweets":
                selectedbg = "fcf1ed";
                filePath = "http://localhost:3000/sweets";
                break;
            case "pastries":
                selectedbg = "f5fbfd";
                filePath = "http://localhost:3000/pastries";
                break;
            case "ourCuisine":
                selectedbg = "fbf0f4";
                filePath = "http://localhost:3000/ourCuisine";
                break;
            default:
        }

        const product = {
            img: img,
            bg: selectedbg,
            title: productName,
            desc: productDesc,
            price: productPrice,
            amount: 1,
        };

        if (validInput) {
            axios.post(filePath, product);
            toast.success(productName + " added successfully!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("../Home");

        }
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={newProduct}>
                            <Title>Add New Product</Title>
                            <label name="ProductName">Product Name:</label>
                            <Input
                                type="text"
                                id="ProductName"
                                name="ProductName"
                                placeholder="Product Name   (max 25 - only Chars)"
                                required
                                minLength="1"
                                maxLength="25"
                                autoFocus
                                fullWidth
                                autoComplete="ProductName"
                                value={productName}
                                onChange={(ev) => setProductName(ev.target.value.replace(/[^a-z\s]*$/gi, ''))}
                            />
                            <br />
                            <label name="Description">Description:</label>
                            <Textarea
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description   (max 200 Chars)"
                                required
                                minLength="1"
                                maxLength="200"
                                rows={4}
                                cols={5}
                                autoComplete="description"
                                value={productDesc}
                                onChange={(ev) => setProductDesc(ev.target.value)}
                            />
                            <br />
                            <label name="Category">Choose a Category:</label>
                            <Select
                                type="text"
                                id="category"
                                name="category"
                                required
                                fullWidth
                                size="3"
                                font-size="30px"
                            >
                                <Option value="sweets">Sweets</Option>
                                <Option value="pastries">Pastries</Option>
                                <Option value="ourCuisine">Our Cuisine</Option>
                            </Select>
                            <br />
                            <label name="img">Upload Image:</label>
                            <input type="file" id="img" name="img" accept="image/*" required
                                onChange={(e) => setImg(e.target.value)} />
                            <br />
                            <label name="Price">Price:</label>
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price (nis)   (max 250 nis - only numbers) "
                                required
                                autoComplete="Price"
                                value={productPrice}
                                onChange={(ev) => setProductPrice(ev.target.value.replace(/\D/g, ''))}
                            />
                            <br />
                            <Button type='submit' onClick={validation} fullWidth>Add Product</Button>

                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <FooterDiv>
                <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
            </FooterDiv>
        </div>
    )
}

export default AddProduct;
