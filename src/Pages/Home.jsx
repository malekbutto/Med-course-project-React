import React from 'react';
// import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/Footer';


const Home = () => {
    // if (!user) {
    //     return <Navigate to="/Home" replace />;
    //   }
    return (
        <div>
            {/* <Slider /> */}
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default Home;