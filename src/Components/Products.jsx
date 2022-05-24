import { popularProducts } from '../data'
import styled from "styled-components";
import Product from './Product'
import axios from "axios";
import { React, useEffect, useState } from "react";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {

  const [productImage, setProductImage] = useState([]);
  const [data, setData] = useState([]);
  let allProducts;

  useEffect(() => {
    const getProducts = async () => {
      const sweets = await axios.get("http://localhost:3000/sweets").then((res) => res.data);
      const pastries = await axios.get("http://localhost:3000/pastries").then((res) => res.data);
      const ourCuisine = await axios.get("http://localhost:3000/ourCuisine").then((res) => res.data);
      allProducts = sweets.concat(pastries, ourCuisine);

      setData(allProducts);
  //     if (allProducts.img.includes('fakepath'))
  //       setProductImage('./Images/Category/No_Image.jpeg');
  //     else
  //       setProductImage(allProducts.img);
    }
    getProducts();
  }, []);

  // console.log(allProducts);

  return (
    <Container>
      {data.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
export default Products;