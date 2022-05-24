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
    ${mobile({ height: "30%", margin: "auto", justifyContent: "center" })}
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    ${mobile({ height: "30vw" })}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    font-size: 14px;
    fontFamily: arial,
    font-size: 14px;
    font-weight: 600;
`;
const PFP = styled.div`
    margin: auto;
    align-items: center;
    justify-content: center;
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



const DeleteProduct = () => {

    const [productsList, setProductsList] = useState();
    const [productId, setProductId] = useState();
    const [productImage, setProductImage] = useState();
    const [productName, setProductName] = useState();
    const [filePath, setFilePath] = useState();
    const [sweetsCategory, setSweetsCategory] = useState();
    const [pastriesCategory, setPastriesCategory] = useState();
    const [ourCuisineCategory, setOurCuisineCategory] = useState();

    let category;
    let tempProduct;

    useEffect(() => {
        const getProducts = async () => {
            const sweetsData = await axios.get("http://localhost:3000/sweets");
            const pastriesData = await axios.get("http://localhost:3000/pastries");
            const ouCuisineData = await axios.get("http://localhost:3000/ourCuisine");
            setSweetsCategory(sweetsData.data);
            setPastriesCategory(pastriesData.data);
            setOurCuisineCategory(ouCuisineData.data);
            console.log(sweetsData);
        }
        getProducts();
    }, []);

    const deleteProduct = (ev) => {
        ev.preventDefault();

        axios.delete(filePath + "/" + productId);
        toast.success(productName + " deleted successfully!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        document.forms[0].reset();
    }

    const CategoryChoosed = (e) => {
        category = e.target.value;
        showProducts(e);
    }

    const showProducts = () => {
        switch (category) {
            case "sweets":
                setFilePath("http://localhost:3000/sweets");
                setProductsList(sweetsCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "pastries":
                setFilePath("http://localhost:3000/pastries");
                setProductsList(pastriesCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "ourCuisine":
                setFilePath("http://localhost:3000/ourCuisine");
                setProductsList(ourCuisineCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
        }

    }

    const ProductChoosed = (e) => {
        setProductName(e.target.value);
        axios.get(filePath).then((res) => {
            tempProduct = res.data.find(
                (item) =>
                    item.title === e.target.value
            );
            setProductId(tempProduct.id);
            if (tempProduct.img.includes('fakepath'))
                setProductImage('./Images/Category/No_Image.jpeg');
            else
                setProductImage(tempProduct.img);
        })
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={deleteProduct}>
                            <Title>Delete Product</Title>
                            <label name="Category">Choose a Category:</label>
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
                            <label name="Product">Choose a Product:</label>
                            <Select
                                type="text"
                                id="product"
                                name="product"
                                required
                                fullWidth
                                size="7"
                                text-size="30px"
                                onChange={ProductChoosed}
                            >
                                {productsList}
                            </Select>
                            <br />
                            <PFP>
                                <img src={productImage} width="100vw" height="100vh" />
                            </PFP>
                            <br />
                            <Button type='submit' fullWidth>Delete Product</Button>
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

export default DeleteProduct;
