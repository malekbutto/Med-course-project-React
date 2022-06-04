import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Navbar from './Components/Navbar';
// import PastriesCategory from './Components/PastriesCategory';
// import SweetsCategory from './Components/SweetsCategory';
// import OurCuisineCategory from './Components/OurCuisineCategory';
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder';
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
import { ToastContainer, toast } from 'react-toastify';
import CategoryDetails from './Components/CategoryDetails';


const App = () => {

  const [user, setUser] = useState();

  const checkForUser = () => {
    if (JSON.parse(localStorage.getItem("currUser") !== null))
      setUser(JSON.parse(localStorage.getItem("currUser")));
    else setUser(undefined);
  };
  useEffect(() => {
    checkForUser();
    // let currOrder = JSON.parse(localStorage.getItem("openOrder"));
    // setCart(currOrder);
  }, []);

  const [cart, setCart] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  let ordersList2 = [];

  const handleAddToCart = async (item) => {
    const arr = [item];
    if (cart === undefined) {
      await setCart(arr);
    }

    if (cart?.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    toast.success(item.title + " added to Cart!", {
      position: "top-right",
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if ((localStorage.getItem("openOrder") === null) || (localStorage.getItem("openOrder") === undefined))
      localStorage.setItem("openOrder", JSON.stringify([{ UserId: user.userID, OrderId: 1, ProductId: item.id, Product_Name: item.title, ProductImg: item.img, ProductBG: item.bg, Product_Desc: item.desc, Price: item.price, Amount: item.amount }]))
    else {
      var data = {
        ProductId: item.id,
        Product_Name: item.title,
        ProductImg: item.img,
        ProductBG: item.bg,
        Product_Desc: item.desc,
        Price: item.price,
        Amount: item.amount
      };
      var currOrder = JSON.parse(localStorage.getItem("openOrder"));
      currOrder.forEach(obj => {
        if (obj.ProductId === item.id)
          this.Amount += 1;
      })
      console.log(currOrder);
      currOrder.push({ UserId: user.userID, OrderId: 1, data });
      localStorage.setItem("openOrder", JSON.stringify(currOrder));
      setCart(...currOrder);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0)
      arr[ind].amount = 1;
    setCart([...arr]);


    // let currOrder = JSON.parse(localStorage.getItem("openOrder"));
    // localStorage.removeItem("openOrder");
    // currOrder.push({ UserId: user.userID, OrderId: 1, Item: item.id, Amount: item.amount });
    // localStorage.setItem("openOrder", JSON.stringify(currOrder));

  };

  const handleOrdersList = (CName, Address, phone, email, cart, totalPrice) => {

    if ((localStorage.getItem("AllOrders") === null) || (localStorage.getItem("AllOrders") === undefined)) {
      localStorage.setItem("AllOrders", JSON.stringify([{ UserId: user.userID, OrderId: 1, Customer_Name: CName, Address: Address, Phone: phone, Email: email, Cart: cart, Total_Price: totalPrice }]))
      localStorage.removeItem("openOrder");
    }
    else {
      let AllOrdersData = JSON.parse(localStorage.getItem("AllOrders"));
      AllOrdersData.push({ UserId: user.userID, OrderId: AllOrdersData[AllOrdersData.length - 1].OrderId + 1, Customer_Name: CName, Address: Address, Phone: phone, Email: email, Cart: cart, Total_Price: totalPrice });
      localStorage.setItem("AllOrders", JSON.stringify(AllOrdersData));
      localStorage.removeItem("openOrder");
    }

  }


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar user={user} setUser={setUser} size={cart === undefined ? 0 : cart?.length} />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home user={user} setUser={setUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} />} />
            <Route path="About" element={<About user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="AddProduct" element={<AddProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="EditProduct" element={<EditProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="DeleteProduct" element={<DeleteProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="AllOrders" element={<AllOrders user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} ordersList={ordersList} setOrdersList={setOrdersList} />} />
            <Route path="Login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/category/:CategoryDetails" element={<CategoryDetails user={user} setUser={setUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} />} />
            {/* <Route path="PastriesCategory" element={<PastriesCategory handleAddToCart={handleAddToCart} />} />
            <Route path="SweetsCategory" element={<SweetsCategory handleAddToCart={handleAddToCart} />} />
            <Route path="OurCuisineCategory" element={<OurCuisineCategory handleAddToCart={handleAddToCart} />} /> */}
            <Route path="Cart" element={<Cart user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="PlaceOrder" element={<PlaceOrder user={user} cart={cart} setCart={setCart} handleChange={handleChange} handleOrdersList={handleOrdersList} />} />
            {/* <Route path="Footer" element={<Footer user={user} setUser={setUser} />} /> */}
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