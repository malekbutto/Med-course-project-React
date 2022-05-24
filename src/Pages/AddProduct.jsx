import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { sweets, pastries, popularProducts, ourCuisine } from '../data';
// import sweets from './File/';
import Footer from "../Components/Footer";
// import { Alert } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
    width: 90vw;
    height: 90%;
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
    ${mobile({ height: "30%",margin: "auto", justifyContent: "center" })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0px 0px;
    padding: 5x;
    ${mobile({ height: "30%" })}
`;
const Textarea = styled.textarea`
        resize: none;
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
    border-radius: 50%;
    margin: auto;
`;
const FooterDiv = styled.div`
    ${mobile({ display: "none" })}
`;

const AddProduct = () => {
    // const [Id, setId] = useState();
    const [img, setImg] = useState();
    const [productName, setProductName] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productPrice, setProductPrice] = useState();

    let inputCategory;
    let filePath;
    let validInput;

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


        // const jsonString = JSON.stringify(filePath);
        // console.log(jsonString);

        // axios.get(filePath).then((res) => {
        //     console.log(res);
        //     // setId(res.data.length);
        //     Id = (res.data[res.data.length - 1].id);
        //     console.log(Id);
        // });
        const product = {
            // id: Id,
            img: img,
            bg: selectedbg,
            title: productName,
            desc: productDesc,
            price: productPrice,
        };
        // document.forms[0].reset();

        if (validInput) {
            axios.post(filePath, product);
            toast.success("Product added successfully!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                                onChange={(ev) => setProductName(ev.target.value.replace(/[^a-z][^a-z\s]*$/gi, ''))}
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
                <Footer />
            </FooterDiv>
        </div>
    )
}

export default AddProduct;
