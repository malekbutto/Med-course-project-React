//import '../css/App.css';
import React from 'react';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <br/> */}
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home;