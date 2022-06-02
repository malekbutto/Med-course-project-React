import styled from "styled-components";
import CategoryItem from "./CategoryItem"
import { mobile } from "../responsive";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = ({user, setUser, cart, setCart, handleAddToCart, handleChange}) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const categoriesData = await axios.get("http://localhost:3000/categories").then((res) => res.data);
      setCategories(categoriesData);
    };
    getCategory();
  }, []);

  
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem user={user} setUser={setUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories;