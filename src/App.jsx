// import { Router } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import PastriesCategory from './Components/PastriesCategory';
import SweetsCategory from './Components/SweetsCategory';
import OtherCategory from './Components/OtherCategory';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const App = () => {
  const [user, setUser] = React.useState(null);
  const handleLogin = () => setUser({ id: '1', name: 'malek' });
  const handleLogout = () => setUser(null);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="PastriesCategory" element={<PastriesCategory />} />
          <Route path="SweetsCategory" element={<SweetsCategory />} />
          <Route path="OtherCategory" element={<OtherCategory />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
  };
  
export default App;