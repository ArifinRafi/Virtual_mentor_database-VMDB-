import React from 'react';
import banner1 from '../images/roboway.jpg'
import './Carousel.css'
import Navbar from '../pages/Navbar';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full ">
              <Navbar></Navbar>
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full banner" />
    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-1">
      <a href="#slide4" className=" mx-10 btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-1">
      <a href="#slide1" className="mx-10 btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
</div>
        </div>
    );
};

export default Carousel;