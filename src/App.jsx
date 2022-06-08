//Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';
import DeleteProduct from './Pages/DeleteProduct';
import AllOrders from './Pages/AllOrders';
import PlaceOrder from './Pages/PlaceOrder';
//Components
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import CategoryDetails from './Components/CategoryDetails';
//React / React-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useState, useEffect } from "react";
//toastify
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  const checkForUser = () => {
    if (JSON.parse(localStorage.getItem("currUser") !== null))
      setUser(JSON.parse(localStorage.getItem("currUser")));
    else setUser(undefined);
  };

  const checkForOpenOrder = () => {
    //ls - Local Storage
    let OpenOrder = JSON.parse(localStorage.getItem("openOrder"));
    let currUserID = JSON.parse(localStorage.getItem("currUserID"));

    //Check if the cart items belong to the correct user
    if (JSON.parse(localStorage.getItem("openOrder") !== null) && (OpenOrder[0].UserId === currUserID)) {
      var currOrder = JSON.parse(localStorage.getItem("openOrder"));
      setCart(currOrder);
    }
    else
      setCart(undefined);
  };

  useEffect(() => {
    checkForUser();
    checkForOpenOrder();
  }, []);

  const handleAddToCart = (item) => {
    var currOrder;
    const arr = [item];
    if (cart === undefined) {
      setCart(arr);
    }

    toast.success(item.title + " added to Cart!", {
      position: "top-right",
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if ((localStorage.getItem("openOrder") === null) || (localStorage.getItem("openOrder") === undefined)) {
      let AllOrdersData = JSON.parse(localStorage.getItem("AllOrders"));
      localStorage.setItem("openOrder", JSON.stringify([{ UserId: user.userID, OrderId: AllOrdersData[AllOrdersData.length - 1].OrderId + 1, ProductId: item.id, Product_Name: item.title, ProductImg: item.img, ProductBG: item.bg, Product_Desc: item.desc, Price: item.price, Amount: item.amount, AllProductPrice: (item.amount * item.price)}]))
      currOrder = JSON.parse(localStorage.getItem("openOrder"));
    }
    else {
      currOrder = JSON.parse(localStorage.getItem("openOrder"));
      let sameProduct = currOrder.find((x) => x.ProductId === item.id);
      let index = currOrder.indexOf(sameProduct);
      console.log(index);

      if (index < 0) {
        let AllOrdersData = JSON.parse(localStorage.getItem("AllOrders"));
        currOrder.push({ UserId: user.userID, OrderId: AllOrdersData[AllOrdersData.length - 1].OrderId + 1, ProductId: item.id, Product_Name: item.title, ProductImg: item.img, ProductBG: item.bg, Product_Desc: item.desc, Price: item.price, Amount: item.amount, AllProductPrice: (item.amount * item.price) });
        localStorage.setItem("openOrder", JSON.stringify(currOrder));
      }
      else {
        currOrder[index].Amount += 1;
        localStorage.setItem("openOrder", JSON.stringify(currOrder));
      }
    }
    setCart(currOrder);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    if (arr[ind].Amount === 1 && d === -1) {
      toast.error("Amount can't be less than 1!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      arr[ind].Amount = 1;
      return;
    }
    else
      arr[ind].Amount += d;

    setCart([...arr]);


    var currOrder = JSON.parse(localStorage.getItem("openOrder"));
    let sameProduct = currOrder.find((x) => x.ProductId === item.ProductId);
    let index = currOrder.indexOf(sameProduct);

    currOrder[index].Amount += d;
    if (currOrder[index].Amount === 0) {
      let filtered = currOrder.filter((x) => x.ProductId !== item.ProductId);
      localStorage.setItem("openOrder", JSON.stringify(filtered));
      setCart(filtered);
    }
    currOrder[index].TotalPrice = (currOrder[index].Amount * currOrder[index].Price);

    localStorage.setItem("openOrder", JSON.stringify(currOrder));
    setCart(currOrder);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar user={user} setUser={setUser} setCart={setCart} size={cart === undefined ? 0 : cart.length} />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home user={user} setUser={setUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} />} />
            <Route path="About" element={<About user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="AddProduct" element={<AddProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="EditProduct" element={<EditProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="DeleteProduct" element={<DeleteProduct user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="AllOrders" element={<AllOrders user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="Login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/category/:CategoryDetails" element={<CategoryDetails user={user} setUser={setUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} handleChange={handleChange} />} />
            <Route path="Cart" element={<Cart user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="PlaceOrder" element={<PlaceOrder user={user} cart={cart} setCart={setCart} handleChange={handleChange} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={700}
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