import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../pages/Navbar'
import Features from '../components/Features';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Carousel></Carousel>
            </div>
            <div> <Features></Features>
            </div>
        </div>
    );
};

export default Home;