import React from 'react';
import Basket from './Basket';
import { popularProducts } from '../data';
import useLocalStorage from './Hooks/uselocalstorage';
import { useState } from 'react';

//

const ShoppingCart = ({ item }) => {

  const { products } = popularProducts;
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // <div className='shop'>
  //   <div className='row'>
  //     <div className='Image_Box'>
  //       <img src={img} alt=''/>
  //     </div>
  //     <div className='Details'>
  //       <p>{title}</p>
  //       <p>{price}</p>
  //       <button>Add to Cart</button>


  return (
  <div>
    <Basket
      cartItems={cartItems}
      onAdd={onAdd}
      onRemove={onRemove}
    ></Basket>
  </div>
  )
}
export default ShoppingCart;