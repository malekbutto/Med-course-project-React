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


const EditProduct = () => {

    const notify = () => toast("Product edited successfully");

    const [img, setImg] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();

    let Id;
    let filePath;
    let category;
    let productsArray;
    let tempProduct;

    const editProduct = (ev) => {
        ev.preventDefault();
        CategoryChoosed(ev);
    }

    const ProductChoosed = (e) => {
        setTitle = (e.target.value);
        axios.get(filePath).then((res) => {
            tempProduct = res.data.find(
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
                    setDesc(tempProduct.desc);
                    return (
                        <tr> product.title</tr>
                    )
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
            default:
        }

    }


    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={editProduct}>
                            <Title>Edit Product</Title>
                            <label for="Category" >Choose a Category:</label>
                            <Select
                                type="text"
                                id="category"
                                name="category"
                                required
                                fullWidth
                                autoComplete="category"
                                size="3"
                                font-size="30px"
                                onChange={CategoryChoosed}
                            >
                                <Option value="sweets">Sweets</Option>
                                <Option value="pastries">Pastries</Option>
                                <Option value="ourCuisine">Our Cuisine</Option>
                            </Select>
                            <label for="Product">Choose a Product:</label>
                            <Select
                                type="text"
                                id="product"
                                name="product"
                                required
                                fullWidth
                                size="3"
                                font-size="30px"
                                onChange={ProductChoosed}
                            >
                                <Option>{title}</Option>
                            </Select>
                            <Input
                                type="text"
                                id="ProductName"
                                name="ProductName"
                                placeholder="Product Name"
                                required
                                fullWidth
                                autoComplete="ProductName"
                                value={title}
                                autoFocus
                                onChange={(e) => setTitle(e.target.value)}
                            >
                                {/* {title} */}
                            </Input>
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
                            >
                                {/* {desc} */}
                            </Input>
                            <label for="img">Upload Image:</label>
                            <Input type="file" id="img" name="img" accept="image/*" value={img}
                                onChange={(e) => setImg(e.target.value)}
                            >
                            </Input>
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
                            >
                            </Input>
                            <Button type='submit' onclick={notify} fullWidth className='btn btn-dark btl-lg btn-block'>Edit Product</Button>
                        </Form>
                    </div>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default EditProduct;
