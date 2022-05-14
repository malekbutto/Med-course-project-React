import React from 'react';
import Basket from './Basket';
import {popularProducts} from '../data';
import useLocalStorage from './Hooks/uselocalstorage';
import { useState } from 'react';

//

const ShoppingCart = () => {
   
    const { products } = popularProducts;
    const [cartItems, setCartItems] = useLocalStorage('cartItems',[]);
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




    return (
      <div className="shop">
        <div className="row">
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        {/* </div> */}
      </div>
      </div>
    );
  }
export default ShoppingCart;