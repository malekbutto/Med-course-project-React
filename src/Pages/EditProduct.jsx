import styled from "styled-components";
import { mobile } from "../responsive";
import { sweets, pastries, ourCuisine } from '../data';
import axios from "axios";
import { React, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

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
    height: 100%;
    ${mobile({ height: "30%", margin: "auto", justifyContent: "center" })}

`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0px 0px;
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    ${mobile({ height: "30%" })}
`;
const Textarea = styled.textarea`
    resize: none;
    font-size: 14px;
    font-weight: 600;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    font-size: 14px;
    font-weight: 600;
    fontFamily: tahoma;
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


const EditProduct = ({user, setUser, cart, setCart, handleChange}) => {

    const [productsList, setProductsList] = useState([]);
    const [productId, setProductId] = useState();
    const [productName, setProductName] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productImage, setProductImage] = useState();
    const [productPrice, setProductPrice] = useState();
    const [filePath, setFilePath] = useState();
    const [sweetsCategory, setSweetsCategory] = useState();
    const [pastriesCategory, setPastriesCategory] = useState();
    const [ourCuisineCategory, setOurCuisineCategory] = useState();
    const [categoryPath, SetCategoryPath] = useState();
    

    var category;
    let tempProduct;
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
        }
        else
            validInput = true;
    }

    useEffect(() => {
        const getProducts = async () => {
            const sweetsData = await axios.get("http://localhost:3000/sweets");
            const pastriesData = await axios.get("http://localhost:3000/pastries");
            const ourCuisineData = await axios.get("http://localhost:3000/ourCuisine");
            setSweetsCategory(sweetsData.data);
            setPastriesCategory(pastriesData.data);
            setOurCuisineCategory(ourCuisineData.data);
        }
        getProducts();
    }, []);

    useEffect(() => {
    }, [productsList])


    const CategoryChoosed = (e) => {
        category = e.target.value;
        console.log(category);
        showProducts(e);
    }

    const showProducts = (e) => {
        switch (category) {
            case "sweets":
                setFilePath("http://localhost:3000/sweets");
                SetCategoryPath("SweetsCategory");
                setProductsList(sweetsCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "pastries":
                setFilePath("http://localhost:3000/pastries");
                SetCategoryPath("PastriesCategory");
                setProductsList(pastriesCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "ourCuisine":
                setFilePath("http://localhost:3000/ourCuisine");
                SetCategoryPath("OurCuisineCategory");
                setProductsList(ourCuisineCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            default:
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
            setProductDesc(tempProduct.desc);
            setProductPrice(tempProduct.price);
            if (tempProduct.img.includes('fakepath'))
                setProductImage('./Images/Category/No_Image.jpeg');
            else
                setProductImage(tempProduct.img);
        })
    }


    const editProduct = (ev) => {
        ev.preventDefault();

        if (validInput) {
            axios.get(filePath).then((res) => {
                tempProduct = res.data.find(
                    (item) =>
                        item.title === productName
                );
                const product = {
                    id: productId,
                    img: productImage,
                    title: productName,
                    desc: productDesc,
                    price: productPrice
                };
                setFilePath(filePath + productId);
                axios.put(filePath + "/" + productId, product);

                toast.success(productName + " edited successfully!", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("../" + categoryPath);
            });
        }
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <div>
                        <Form onSubmit={editProduct}>
                            <Title>Edit Product</Title>
                            <label name="Category" >Choose a Category:</label>
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
                                font-size="30px"
                                onChange={ProductChoosed}
                            >
                                {productsList}
                            </Select>
                            <br />
                            <label name="Category" >Product Name:</label>
                            <Input
                                type="text"
                                id="ProductName"
                                name="ProductName"
                                placeholder="Product Name   (max 25 - only Chars)"
                                required
                                minLength="1"
                                maxLength="25"
                                autoComplete="ProductName"
                                onChange={(e) => setProductName(e.target.value)}
                                value={productName}
                            >
                            </Input>
                            <br />
                            <label name="Category" >Description:</label>
                            <Textarea
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description of the Product   (max 200 Chars)"
                                required
                                minLength="1"
                                maxLength="200"
                                rows={3}
                                cols={5}
                                autoComplete="description"
                                value={productDesc}
                                onChange={(ev) => setProductDesc(ev.target.value.replace(/[^a-z]/, ' '))}
                            >
                            </Textarea>
                            <br />
                            <label name="img">Upload Image:</label>
                            <Input type="file"
                                id="img"
                                name="img"
                                accept="image/*"
                                onChange={(ev) => setProductImage(ev.target.value)}
                            >
                            </Input>
                            <PFP>
                                {<img src={productImage} width="100vw" height="100vh" />}
                            </PFP>
                            <label name="Category" >Price:</label>
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price of the Product (nis)"
                                required
                                fullWidth
                                autoComplete="Price"
                                value={productPrice}
                                onChange={(ev) => setProductPrice(ev.target.value.replace(/\D/g, ''))}
                            >
                            </Input>
                            <br />
                            <Button type='submit' onClick={validation} fullWidth>Edit Product</Button>
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

export default EditProduct;
