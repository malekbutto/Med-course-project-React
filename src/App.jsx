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
import axios from "axios";
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';
import DeleteProduct from './Pages/DeleteProduct';
import AllOrders from './Pages/AllOrders';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';

const App = () => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  
  const checkForUser = () => {
    if (JSON.parse(localStorage.getItem("currUser") !== null))
      setUser(JSON.parse(localStorage.getItem("currUser")));
    else setUser(undefined);
  };
  useEffect(async () => {
    const usersData = await axios.get("/Files/JSON_Files/users.json");
    const recieveData = usersData.data.map((item) => {
      delete item.password;
      delete item.email;
      return item;
    });
    checkForUser();
    //
    setUsers(recieveData);
    
    localStorage.setItem("usersList", JSON.stringify(recieveData));
  }, []);
  useEffect(async () => {
  }, [user]);

  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar user={user} setUser={setUser}/>}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home user={user}/>} />
          <Route path="About" element={<About />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="EditProduct" element={<EditProduct />} />
          <Route path="DeleteProduct" element={<DeleteProduct />} />
          <Route path="AllOrders" element={<AllOrders />} />
          <Route path="Login" element={<Login user={user} setUser={setUser} />} />
          <Route path="PastriesCategory" element={<PastriesCategory />} />
          <Route path="SweetsCategory" element={<SweetsCategory />} />
          <Route path="OurCuisineCategory" element={<OurCuisineCategory />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="ShoppingCart" element={<ShoppingCart />} />
          
          <Route path="Footer" element={<Footer user={user}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;