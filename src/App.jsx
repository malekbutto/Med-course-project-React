import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import PastriesCategory from './Components/PastriesCategory';
import SweetsCategory from './Components/SweetsCategory';
import OurCuisineCategory from './Components/OurCuisineCategory';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useState, useEffect } from "react";
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';
import DeleteProduct from './Pages/DeleteProduct';
import AllOrders from './Pages/AllOrders';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';
import { ToastContainer } from 'react-toastify';
import { Box } from '@material-ui/core';

const App = () => {

  const [user, setUser] = useState();


  const checkForUser = () => {
    if (JSON.parse(localStorage.getItem("currUser") !== null))
      setUser(JSON.parse(localStorage.getItem("currUser")));
    else setUser(undefined);
  };
  useEffect(() => {
    checkForUser();
  }, []);



  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0)
      arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar user={user} setUser={setUser} size={cart.length} />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home user={user} handleAddToCart={handleAddToCart} />} />
            <Route path="About" element={<About />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="EditProduct" element={<EditProduct />} />
            <Route path="DeleteProduct" element={<DeleteProduct />} />
            <Route path="AllOrders" element={<AllOrders />} />
            <Route path="Login" element={<Login user={user} setUser={setUser} />} />
            <Route path="PastriesCategory" element={<PastriesCategory handleAddToCart={handleAddToCart} />} />
            <Route path="SweetsCategory" element={<SweetsCategory handleAddToCart={handleAddToCart} />} />
            <Route path="OurCuisineCategory" element={<OurCuisineCategory handleAddToCart={handleAddToCart} />} />
            <Route path="Cart" element={<Cart cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} />} />
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="Footer" element={<Footer user={user} setUser={setUser} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        limit={1}
      />
    </div>
  );
}

export default App;