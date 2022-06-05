import CategoryItem from "./CategoryItem"
import axios from "axios";
import { useEffect, useState } from "react";
import {Container } from '../Styled_Components/Categories_Styled';

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