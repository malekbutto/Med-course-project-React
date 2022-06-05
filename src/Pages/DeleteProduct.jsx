import Footer from "../Components/Footer";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Wrapper, Title, Form, Select,
    Option, PFP, Button, FooterDiv } from '../Styled_Components/DeleteProduct_Styled';

const DeleteProduct = ({ user, setUser, cart, setCart, handleChange }) => {

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

    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            const sweetsData = await axios.get("http://localhost:3000/sweets");
            const pastriesData = await axios.get("http://localhost:3000/pastries");
            const ouCuisineData = await axios.get("http://localhost:3000/ourCuisine");
            setSweetsCategory(sweetsData.data);
            setPastriesCategory(pastriesData.data);
            setOurCuisineCategory(ouCuisineData.data);
        }
        getProducts();
    }, []);

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
            default:
                break;
        }
    }

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
        navigate("../Home");
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
                                <img src={productImage} alt="" width="100vw" height="100vh" />
                            </PFP>
                            <br />
                            <Button type='submit' fullWidth>Delete Product</Button>
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

export default DeleteProduct;
