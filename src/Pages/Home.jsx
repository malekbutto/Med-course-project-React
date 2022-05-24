import React from 'react';
// import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';


const Home = () => {

    return (
        <div>
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
            {/* <Slider /> */}
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default Home;