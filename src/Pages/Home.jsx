import React from 'react';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const Home = ({user, setUser, cart, setCart, handleAddToCart, handleChange}) => {

    return (
        <div>
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
            <Categories user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
            <Products handleAddToCart={handleAddToCart}/>
            <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange}/>
        </div>
    )
}

export default Home;