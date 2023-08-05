import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../pages/Navbar'
import Features from '../components/Features';

const Home = () => {
    return (
        <div>
            <Navbar/>
                <Carousel></Carousel>
            
             <Features></Features>
            
        </div>
    );
};

export default Home;