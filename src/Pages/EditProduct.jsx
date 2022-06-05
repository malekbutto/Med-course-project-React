import Footer from "../Components/Footer";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Wrapper, Title, Form, Input, Textarea,
    Select, Option, PFP, Button, FooterDiv } from '../Styled_Components/EditProduct_Styled';

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
        showProducts(e);
    }

    const showProducts = () => {
        switch (category) {
            case "sweets":
                setFilePath("http://localhost:3000/sweets");
                SetCategoryPath("category/sweets");
                setProductsList(sweetsCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "pastries":
                setFilePath("http://localhost:3000/pastries");
                SetCategoryPath("category/pastries");
                setProductsList(pastriesCategory.map((product) => {
                    return <Option key={product.id}>{product.title}</Option>
                }
                ));
                break;
            case "ourCuisine":
                setFilePath("http://localhost:3000/ourCuisine");
                SetCategoryPath("category/ourCuisine");
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
                            <label name="ProductName" >Product Name:</label>
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
                            <label name="Description">Description:</label>
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
                                {<img src={productImage} alt="" width="100vw" height="100vh" />}
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
