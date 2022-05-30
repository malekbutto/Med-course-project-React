import React from 'react';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';


const Home = ({handleAddToCart, user, setUser}) => {

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
            <Categories />
            <Products handleAddToCart={handleAddToCart}/>
            <Footer user={user} setUser={setUser}/>
        </div>
    )
}

export default Home;